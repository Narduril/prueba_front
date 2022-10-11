import { combineReducers } from 'redux';
import { all } from '@redux-saga/core/effects';
import { productsReducer, productsSaga } from './products';
import { productReducer, productSaga } from './product';
import { cartReducer, cartSaga } from './cart';

/** Root reducers */
const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer
});

/** Root Sagas */
export function* rootSaga() {
  yield all([productsSaga(), productSaga(), cartSaga()]);
}

/** Reset Reducer */
export const rootReducer = (state, action) => {
  switch (action.type) {
    case 'APP@@CLEAR_STATE_APP':
      state = undefined;
      break;

    default:
      break;
  }

  return allReducers(state, action);
};
