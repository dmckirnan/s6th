import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
  configure,
  mount,
  render,
  shallow,
} from 'enzyme';
import sass from 'node-sass';
import hook from 'css-modules-require-hook';
import 'babel-polyfill';

hook({
  generateScopedName: '[name]__[local]__[hash:base64:5]',
  extensions: ['.scss'],
  preprocessCss: data => sass.renderSync({
    data,
  }).css,
  camelCase: true,
});

chai.use(sinonChai);
configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

['.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null;
});

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
};


global.window = window;
global.document = window.document;
global.navigator = { userAgent: 'node.js' };
/* Provide global use of these methods without imports */
global.chai = chai;
global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();
global.shallow = shallow;
global.mount = mount;
global.render = render;

copyProps(window, global);
