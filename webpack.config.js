const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const PRODUCTION_ENV = NODE_ENV === 'production';
const BUILD_PATH = path.join(__dirname, 'build');
const INDEX_HTML_PATH = './src/index.html';


const entry = ['babel-polyfill', './src/index'];
/* Include Hot Middleware Entry Point In Development */
if (!PRODUCTION_ENV) entry.push('webpack-hot-middleware/client?reload=true');

/* Output Data */
const output = {
  path: path.join(__dirname, 'dist'),
  publicPath: '/',
  filename: '[name].[hash].js',
  chunkFilename: '[chunkhash].[name].bundle.js',
};

/* JSX and JS Loader Configuration */
const JAVASCRIPT_LOADER = { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] };
/* SASS and CSS Loader Configuration */
const STYLE_LOADER = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    PRODUCTION_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        camelCase: true,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]',
      },
    },
    'postcss-loader',
    'sass-loader'
  ],
};
/* File Loaders Used for Images, Fonts, SVGs, etc. */
const FILE_LOADERS = [
  {
    test: /\.woff(\?.*)?$/,
    use: ['url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'],
  },
  {
    test: /\.woff2(\?.*)?$/,
    use: ['url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'],
  },
  {
    test: /\.otf(\?.*)?$/,
    use: ['file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'],
  },
  {
    test: /\.ttf(\?.*)?$/,
    use: ['url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'],
  },
  { test: /\.eot(\?.*)?$/, use: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/, use: ['url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'] },
  { test: /\.(png|jpg|gif)$/, use: ['file-loader'] }
];

const devServer = {
  contentBase: BUILD_PATH,
  open: true,
  historyApiFallback: true,
};

const resolve = {
  extensions: ['.js', '.jsx', '.json', '.scss'],
  modules: [
    'node_modules',
    'src',
    path.resolve(__dirname, './src/components/'),
    path.resolve(__dirname, './src/lib'),
  ],
  alias: {
    components: path.resolve(__dirname, './src/components/'),
    lib: path.resolve(__dirname, './src/lib'),
  }
};

const plugins = [
  new CleanWebpackPlugin('dist', {}),
  new HtmlWebpackPlugin({
    inject: 'body',
    hash: true,
    template: INDEX_HTML_PATH,
    filename: 'index.html',
    minify: { collapseWhitespace: true },
  }),
  new MiniCssExtractPlugin({
    filename: PRODUCTION_ENV ? '[name].[hash].css' : '[name].css',
    chunkFilename: PRODUCTION_ENV ? '[id].[hash].css' : '[id].css',
  }),
];

/* Development Only Plugin */
if (!PRODUCTION_ENV) plugins.push(new webpack.HotModuleReplacementPlugin());

// ============================================
//        Final Webpack Configuration
// ============================================
const webpackConfig = {
  devServer,
  devtool: 'inline-source-map',
  entry: { app: './src/index.js' },
  mode: PRODUCTION_ENV ? 'production' : 'development',
  module: { rules: [JAVASCRIPT_LOADER, STYLE_LOADER].concat(FILE_LOADERS) },
  output,
  plugins,
  resolve,
  target: 'web',
};

const optimization = {
  minimizer: [
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: { compress: { drop_console: true } },
    }),
  ],
};

if (PRODUCTION_ENV) webpackConfig.optimization = optimization;

module.exports = webpackConfig;
