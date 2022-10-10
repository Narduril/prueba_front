import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import { productsReducer, productsSaga } from './products';
import { productReducer, productSaga } from './product';

/** Root reducers */
const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer
});

/** Root Sagas */
export function* rootSaga() {
  yield all([productsSaga(), productSaga()]);
}

/** Reset Reducer */
export const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      break;
  }

  return allReducers(state, action);
};
