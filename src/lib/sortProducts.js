import isFalsy from './isFalsy';
import sortByNestedAscNumberProp from './sortByNestedAscNumberProp';
import sortByNestedDescNumberProp from './sortByNestedDescNumberProp';

/**
 * @function sortProducts
 * @param {Object}
 * @prop {Object} currentSort
 * @prop {<Array.<Object>} productList
 * @return {<Array.<Object>}
 */
const sortProducts = ({ currentSort, productList }) => {
  if (isFalsy(productList)) return [];
  if (isFalsy(currentSort) || isFalsy(currentSort.sortBy)) return productList;

  switch (currentSort.sortBy) {
    case 'price':
      return sortByNestedAscNumberProp(
        productList,
        ['product', 'price'],
      );
    case 'promotes':
      return sortByNestedDescNumberProp(
        productList,
        ['product', 'promote_cnt'],
      );
    default:
      return productList;
  }
};

export default sortProducts;
