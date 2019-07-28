import React from 'react';
import PropTypes from 'prop-types';

import ProductList from './components/ProductList';
import styles from './App.scss';

/**
 * Main Application Component
 * @function App
 * @param {Object} props
 * @return {ReactElement}
 */
const App = ({
  clearProductList,
  currentSort,
  getProductList,
  isProductListLoading,
  productList,
  updateProductSorting,
}) => {
  return (
    <div className={styles.appContainer}>
      <ProductList
        clearProductList={clearProductList}
        currentSort={currentSort}
        getProductList={getProductList}
        isProductListLoading={isProductListLoading}
        productList={productList}
        updateProductSorting={updateProductSorting}
      />
    </div>
  );
};

App.propTypes = {
  clearProductList: PropTypes.func.isRequired,
  currentSort: PropTypes.shape({
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
  }).isRequired,
  getProductList: PropTypes.func.isRequired,
  isProductListLoading: PropTypes.bool.isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      display_name: PropTypes.string,
      price: PropTypes.number,
      promote_cnt: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  updateProductSorting: PropTypes.func.isRequired,
};

export default App;
