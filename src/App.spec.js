import React from 'react';

import ProductList from './components/ProductList';
import App from './App';

const props = {
  clearProductList: () => {},
  currentSort: { sortBy: '', sortDirection: '' },
  getProductList: () => {},
  isProductListLoading: false,
  productList: [],
  updateProductSorting: () => {},
};

describe('<App />', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App {...props} />));

  it('should exist', () => {
    expect(wrapper).to.exist;
  });

  it('should render a <ProductList /> component', () => {
    expect(wrapper.find(ProductList)).to.have.length(1);
  });
});
