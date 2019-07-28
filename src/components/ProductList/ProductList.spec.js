import React from 'react';

import ProductListGrid from './ProductListGrid';
import ProductListHeader from './ProductListHeader';
import ProductList from './ProductList';

const props = {
  clearProductList: () => {},
  currentSort: { sortBy: 'promotes', sortDirection: 'desc' },
  getProductList: () => {},
  isProductListLoading: false,
  productList: [],
  updateProductSorting: () => {},
};

describe('<ProductList />', () => {
  let wrapper;
  wrapper = shallow(<ProductList {...props} />);

  it('should exist', () => {
    expect(wrapper).to.exist;
  });

  it('should call `props.getProductList` on initial render', () => {
    const spy = sinon.spy(props, 'getProductList');
    wrapper = mount(<ProductList {...props} />);
    expect(spy.callCount).to.equal(1);
    spy.restore();
  });

  it('should call `props.clearProductList` on unmount', () => {
    const spy = sinon.spy(props, 'clearProductList');
    wrapper = mount(<ProductList {...props} />);
    wrapper.unmount();
    expect(spy.callCount).to.equal(1);
    spy.restore();
  });

  it('should render a <ProductListGrid /> component', () => {
    expect(ProductListGrid).to.have.length(1);
  });

  it('should render a <ProductListHeader /> component', () => {
    expect(ProductListHeader).to.have.length(1);
  });
});
