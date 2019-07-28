import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import ProductListGridCard from './ProductListGridCard';
import styles from './ProductListGrid.scss';

/**
 * Grid Container for All Product Cards in <ProductList />
 * @function ProductListGrid
 * @param {Object} props
 * @return {ReactElement}
 */
const ProductListGrid = ({ productList }) => {
  /* Memoize List Result, Possible Pre-Optimization, but No True Loss in Performance Here */
  const cards = useMemo(
    () => productList.map(product => {
      return (
        <ProductListGridCard
          displayName={product.artist.display_name}
          img={product.card.image}
          key={`${product.card.id}-${product.card.title}`}
          price={product.product.price}
          promotes={product.product.promote_cnt}
          title={product.card.title}
        />
      );
    }),
    [productList],
  );

  return (
    <div className={styles.productListGrid}>
      {cards}
    </div>
  );
};

ProductListGrid.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      display_name: PropTypes.string,
      price: PropTypes.number,
      promote_cnt: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ProductListGrid;
