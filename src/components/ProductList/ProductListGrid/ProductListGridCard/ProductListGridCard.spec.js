import React from 'react';
import numeral from 'numeral';

import ProductListGridCard from './ProductListGridCard';
import styles from './ProductListGridCard.scss';

const props = {
  displayName: 'Artist Darrick',
  img: { src: 'test/url', alt: 'Test Image' },
  price: 4.99,
  promotes: 50000,
  title: 'Art Title',
};

describe('<ProductListGridCard />', () => {
  let wrapper;
  wrapper = shallow(<ProductListGridCard {...props} />);

  it('should exist', () => {
    expect(wrapper).to.exist;
  });

  it('should render an <img /> element with the attributes from `props.img`', () => {
    expect(wrapper.find('img').props().src).to.equal(props.img.src);
    expect(wrapper.find('img').props().alt).to.equal(props.img.alt);
  });

  it('should render `props.title` in `styles.title` as expected', () => {
    expect(wrapper.find(`.${styles.title}`).text()).to.equal(props.title);
  });

  it('should render `props.promotes` in `styles.promotes` as expected', () => {
    expect(wrapper.find(`.${styles.promotes}`).text()).to.equal(numeral(props.promotes).format('0,0'))
  });

  it('should render `props.displayName` in `styles.name` as expected', () => {
    expect(wrapper.find(`.${styles.name}`).text()).to.equal(props.displayName);
  });

  it('should render `props.price` in `styles.price` as expected', () => {
    expect(wrapper.find(`.${styles.price}`).text()).to.equal(`$${props.price}`);
  });
});
