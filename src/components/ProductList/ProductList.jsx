import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import ProductListGrid from './ProductListGrid';
import ProductListHeader from './ProductListHeader';
import styles from './ProductList.scss';

/**
 * ProductList Root Component + Calls Fetch for JSON Data `response.json`
 * @function ProductList
 * @param {Object}
 * @return {ReactElement}
 */
const ProductList = ({
  clearProductList,
  currentSort,
  getProductList,
  isProductListLoading,
  productList,
  updateProductSorting,
}) => {
  /* Fetch Product List */
  useEffect(() => {
    getProductList();
    /* Clear Product List on Cleanup */
    return clearProductList;
    /* Empty Dependency Array to Prevent Successive Calls on All Renders */
  }, []);
  /* Helper to Call UpdateProductSorting for Price */
  const sortByPrice = useCallback(
    () => updateProductSorting('price', 'asc'),
    [],
  );
  /* Helper to Call UpdateProductSorting for Promotes */
  const sortByPromotes = useCallback(
    () => updateProductSorting('promotes', 'desc'),
    [],
  );

  return (
    <div className={styles.productList}>
      <ProductListHeader
        currentSort={currentSort}
        isLoading={isProductListLoading}
        sortByPrice={sortByPrice}
        sortByPromotes={sortByPromotes}
      />
      <ProductListGrid
        currentSort={currentSort}
        isLoading={isProductListLoading}
        productList={productList}
      />
    </div>
  );
};

ProductList.propTypes = {
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

export default ProductList;
