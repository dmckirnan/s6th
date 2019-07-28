import React from 'react';

import Button from '../../Button';
import ProductListHeader from './ProductListHeader';

const props = {
  currentSort: { sortBy: 'promotes', sortDirection: 'desc' },
  isLoading: false,
  sortByPrice: () => {},
  sortByPromotes: () => {},
};

describe('<ProductListHeader />', () => {
  let wrapper;
  wrapper = shallow(<ProductListHeader {...props} />);

  it('should exist', () => {
    expect(wrapper).to.exist;
  });

  it('should render 2 <Button /> components', () => {
    expect(wrapper.find(Button)).to.have.length(2);
  });

  it('should call `props.sortByPrice` when `Sort by Price` clicked', () => {
    const spy = sinon.spy(props, 'sortByPrice');
    wrapper = shallow(<ProductListHeader {...props} />);
    wrapper.find(Button).at(0).simulate('click');
    expect(spy.callCount).to.equal(1);
    spy.restore();
  });

  it('should pass `isActive` as true to price btn when currentSort.sortBy === `price`', () => {
    wrapper.setProps({ currentSort: { sortBy: 'price', sortDirection: 'asc' } });
    wrapper.update();
    expect(wrapper.find(Button).at(0).props().isActive).to.equal(true);
  });

  it('should pass `isActive` as false to price btn when currentSort.sortBy !== `price`', () => {
    wrapper.setProps({ currentSort: { sortBy: 'promotes', sortDirection: 'desc' } });
    wrapper.update();
    expect(wrapper.find(Button).at(0).props().isActive).to.equal(false);
  });

  it('should pass `isActive` as true to promotes btn when currentSort.sortBy === `promotes`', () => {
    wrapper.setProps({ currentSort: { sortBy: 'promotes', sortDirection: 'desc' } });
    wrapper.update();
    expect(wrapper.find(Button).at(1).props().isActive).to.equal(true);
  });

  it('should pass `isActive` as false to promotes btn when currentSort.sortBy !== `promotes`', () => {
    wrapper.setProps({ currentSort: { sortBy: 'price', sortDirection: 'asc' } });
    wrapper.update();
    expect(wrapper.find(Button).at(1).props().isActive).to.equal(false);
  });

  it('should call `props.sortByPromotes` when `Sort by Promotes` clicked', () => {
    const spy = sinon.spy(props, 'sortByPromotes');
    wrapper = shallow(<ProductListHeader {...props} />);
    wrapper.find(Button).at(1).simulate('click');
    expect(spy.callCount).to.equal(1);
    spy.restore();
  });

  it('should pass `props.isLoading` to <Button /> components', () => {
    wrapper.setProps({ isLoading: true });
    wrapper.update();
    expect(wrapper.find(Button).at(0).props().isLoading).to.equal(true);
    expect(wrapper.find(Button).at(1).props().isLoading).to.equal(true);
  });
});
