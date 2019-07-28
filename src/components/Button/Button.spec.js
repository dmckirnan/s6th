import React from 'react';

import Button from './Button';
import styles from './Button.scss';

const props = {
  onClick: () => {},
  text: 'Test',
  className: null,
  isActive: false,
  isDisabled: false,
  style: null,
};

describe('<Button />', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Button {...props} />));

  it('should exist', () => {
    expect(wrapper).to.exist;
  });

  it('should call `props.onClick` when props flags are false', () => {
    const spy = sinon.spy(props, 'onClick');
    wrapper = shallow(<Button {...props} />);
    wrapper.find('button').simulate('click');
    expect(spy.callCount).to.equal(1);
    spy.restore();
  });

  it('should not call `props.onClick` when any `props.isActive` is true', () => {
    const spy = sinon.spy(props, 'onClick');
    wrapper = shallow(<Button {...props} />);
    wrapper.setProps({ isActive: true });
    wrapper.update();
    wrapper.find('button').simulate('click');
    expect(spy.callCount).to.equal(0);
    spy.restore();
  });

  it('should not call `props.onClick` when any `props.isDisabled` is true', () => {
    const spy = sinon.spy(props, 'onClick');
    wrapper = shallow(<Button {...props} />);
    wrapper.setProps({ isDisabled: true });
    wrapper.update();
    wrapper.find('button').simulate('click');
    expect(spy.callCount).to.equal(0);
    spy.restore();
  });

  it('should render `props.text` as expected', () => {
    expect(wrapper.text()).to.equal(props.text);
  });

  it('should pass down `styles.buttonActive` when `props.isActive` true', () => {
    wrapper.setProps({ isActive: true });
    wrapper.update();
    expect(wrapper.hasClass(styles.buttonActive)).to.equal(true);
  });

  it('should pass down `styles.buttonDisabled` when `props.isDisabled` true', () => {
    wrapper.setProps({ isDisabled: true });
    wrapper.update();
    expect(wrapper.hasClass(styles.buttonDisabled)).to.equal(true);
  });

  it('should handle the `className` prop', () => {
    const className = 'test-classname-for-button';
    wrapper.setProps({ className });
    wrapper.update();
    expect(wrapper.hasClass(className)).to.equal(true);
  });

  it('should handle the `style` prop', () => {
    const style = { color: 'red' };
    wrapper.setProps({ style });
    wrapper.update();
    expect(wrapper.props().style).to.deep.equal(style);
  });
});
