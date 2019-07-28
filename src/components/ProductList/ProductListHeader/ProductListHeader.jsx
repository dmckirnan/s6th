import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import styles from './ProductListHeader.scss';

const sorts = { price: 'price', promotes: 'promotes' };

/**
 * @function ProductListHeader
 * @param {Object} props
 * @return {ReactElement}
 */
const ProductListHeader = ({
  currentSort,
  isLoading,
  sortByPrice,
  sortByPromotes,
}) => {
  return (
    <div className={styles.productListHeader}>
      <span className={styles.title} title="Society6 Product List">Society6 Product List</span>
      <div className={styles.buttonContainer}>
        <Button
          isActive={currentSort.sortBy === sorts.price}
          isLoading={isLoading}
          text="Sort By Price"
          onClick={sortByPrice}
        />
        <Button
          isActive={currentSort.sortBy === sorts.promotes}
          isLoading={isLoading}
          text="Sort By Promotes"
          onClick={sortByPromotes}
        />
      </div>
    </div>
  );
};

ProductListHeader.propTypes = {
  currentSort: PropTypes.shape({
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  sortByPrice: PropTypes.func.isRequired,
  sortByPromotes: PropTypes.func.isRequired,
};

export default ProductListHeader;
