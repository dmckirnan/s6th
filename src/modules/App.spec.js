import thunk from 'redux-thunk';

import reducer, {
  CLEAR_PRODUCT_LIST,
  defaultState,
  IS_PRODUCT_LIST_LOADING,
  RECEIVE_PRODUCT_LIST,
  UPDATE_PRODUCT_SORTING,
} from './App';
 
const ogState = { ...defaultState };

describe('App Module', () => {
  it('should have a reducer', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return state when reducer receives an invalid action', () => {
    const state = ogState;
    const nextState = reducer(state, { type: '' });
    expect(nextState).to.deep.equal(ogState);
  });

  describe('App Reducer Handles Actions', () => {
    it('handles CLEAR_PRODUCT_LIST', () => {
      const state = { productList: [{ key: 'Test' }] };
      const action = { type: CLEAR_PRODUCT_LIST, payload: defaultState.productList };
      const nextState = reducer(state, action);
      expect(nextState.productList).to.deep.equal(action.payload);
    });

    it('handles IS_PRODUCT_LIST_LOADING', () => {
      const state = { isProductListLoading: false };
      const action = { type: IS_PRODUCT_LIST_LOADING, payload: true };
      const nextState = reducer(state, action);
      expect(nextState.isProductListLoading).to.equal(true);
    });

    it('handles RECEIVE_PRODUCT_LIST', () => {
      const state = { productList: defaultState.productList };
      const action = { type: RECEIVE_PRODUCT_LIST, payload: [{ key: 'Test' }] };
      const nextState = reducer(state, action);
      expect(nextState.productList).to.deep.equal(action.payload);
    });

    it('handles UPDATE_PRODUCT_SORTING', () => {
      const state = { currentSort: defaultState.currentSort };
      const action = { type: UPDATE_PRODUCT_SORTING, payload: { sortBy: 'price', sortDirection: 'asc' } };
      const nextState = reducer(state, action);
      expect(nextState.currentSort).to.deep.equal(action.payload);
    });
  });
});
