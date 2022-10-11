import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { all } from '@redux-saga/core/effects';
import { productsReducer, productsSaga } from './products';
import { productReducer, productSaga } from './product';
import { cartReducer, cartSaga } from './cart';

/** Persist State */
const persistConfig = { key: 'app', storage };

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

/** Persisted Reducer */
export const persistedReducer = persistReducer(persistConfig, rootReducer);
