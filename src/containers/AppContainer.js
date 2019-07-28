
import { connect } from 'react-redux';

import {
  clearProductList,
  getProductList,
  updateProductSorting,
} from '../modules/App';
import App from '../App.jsx';

const mapDispatchToProps = dispatch => {
  return {
    clearProductList: () => dispatch(clearProductList()),
    getProductList: () => dispatch(getProductList()),
    updateProductSorting: (sortBy, sortDirection) => dispatch(updateProductSorting(sortBy, sortDirection)),
  };
};

const mapStateToProps = state => ({
  currentSort: state.app.currentSort,
  isProductListLoading: state.app.isProductListLoading,
  productList: state.app.productList,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
