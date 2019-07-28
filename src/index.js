import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'isomorphic-fetch';
import 'babel-polyfill';

import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

/* eslint-disable no-undef */
const store = configureStore();
render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
