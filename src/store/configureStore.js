import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
  // ======================================================
  // Store Enhancers
  // ======================================================
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
}
