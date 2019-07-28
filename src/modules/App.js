import sortProducts from '../lib/sortProducts';
import productList from '../response.json';

export const defaultState = {
  currentSort: { sortBy: 'promotes', sortDirection: 'desc' },
  isProductListLoading: false,
  productList: [],
};

export const CLEAR_PRODUCT_LIST = 'CLEAR_PRODUCT_LIST';
/**
 * Reset Product List to Empty List
 * @function clearProductList
 * @return {Object} CLEAR_PRODUCT_LIST Action Payload
 */
export const clearProductList = () => ({
  type: CLEAR_PRODUCT_LIST,
  payload: defaultState.productList,
});

export const IS_PRODUCT_LIST_LOADING = 'IS_PRODUCT_LIST_LOADING';
/**
 * Toggle Loading Flag for Product Fetching
 * @function isProductListLoading
 * @param {Boolean} isLoading
 * @return {Object} IS_PRODUCT_LIST_LOADING Action Payload
 */
export const isProductListLoading = isLoading => ({
  type: IS_PRODUCT_LIST_LOADING,
  payload: isLoading,
});

export const RECEIVE_PRODUCT_LIST = 'RECEIVE_PRODUCT_LIST';
/**
 * Sets Product List State After Fetch
 * @function receiveProductList
 * @param {Object} data
 * @return {Object} RECEIVE_PRODUCT_LIST Action Payload
 */
export const receiveProductList = data => ({
  type: RECEIVE_PRODUCT_LIST,
  payload: data,
});

/**
 * Fetches Product List from JSON File & Sorts Based on CurrentSort
 * @function getProductList
 * @return {Function} Dispatch of receiveProductList
 */
export const getProductList = () => {
  return async (dispatch, getState) => {
    const { currentSort } = getState().app;
    console.log(productList);
    dispatch(isProductListLoading(true));
    return dispatch(receiveProductList(sortProducts({
      currentSort,
      productList: productList.data.attributes.cards,
    })));
  };
};

export const UPDATE_PRODUCT_SORTING = 'UPDATE_PRODUCT_SORTING';
/**
 * Updates Product Sorting State
 * @function updateProductSorting
 * @param {String} sortBy
 * @param {String} sortDirection
 * @return {Object} UPDATE_PRODUCT_SORTING Action Payload
 */
export const updateProductSorting = (sortBy, sortDirection) => {
  return async dispatch => {
    await dispatch({ type: UPDATE_PRODUCT_SORTING, payload: { sortBy, sortDirection } });
    return dispatch(getProductList());
  };
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CLEAR_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case IS_PRODUCT_LIST_LOADING:
      return { ...state, isProductListLoading: action.payload };
    case RECEIVE_PRODUCT_LIST:
      return { ...state, productList: action.payload, isProductListLoading: false };
    case UPDATE_PRODUCT_SORTING:
      return { ...state, currentSort: action.payload };
    default:
      return state;
  }
}
