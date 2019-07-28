import React from 'react';

import ProductListGridCard from './ProductListGridCard';
import ProductListGrid from './ProductListGrid';

const props = {
  productList: [],
};

describe('<ProductListGrid />', () => {
  let wrapper;
  wrapper = shallow(<ProductListGrid {...props} />);

  it('should exist', () => {
    expect(wrapper).to.exist;
  });

  it('should not render any <ProductListGridCard /> components if `props.productList` is empty', () => {
    expect(wrapper.find(ProductListGridCard)).to.have.length(0);
  });

  it('should render as many <ProductListGridCard /> components as `props.productList.length`', () => {
    wrapper.setProps({
      productList: [
        {
          artist: { display_name: 'Test' },
          card: { id: '1', title: 'Test', image: { src: '', alt: '' } },
          product: { price: 14.99, promote_cnt: 5 },
        },
        {
          artist: { display_name: 'Test2' },
          card: { id: '2', title: 'Test2', image: { src: '', alt: '' } },
          product: { price: 17.99, promote_cnt: 200 },
        },
      ],
    });
    wrapper.update();
    expect(wrapper.find(ProductListGridCard)).to.have.length(2);
  });
});
