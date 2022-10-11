import { all, put, takeLatest } from '@redux-saga/core/effects';
import { fetch } from '../../api/core/core';
import { config } from '../../api/config';
import { CartActionTypes } from './types';
import { addCartDetailsDispatchActionSuccess } from './dispatchers';

/** Initial Saga */
export function* cartSaga() {
  yield all([takeLatest(CartActionTypes.ADD_CART, addCart)]);
}

/** Saga Functions */
function* addCart(action) {
  const data = {
    id: action.id,
    colorCode: action.colorCode,
    storageCode: action.storageCode
  };

  /** Ejecutamos la petición */
  const response = yield fetch(
    config.cart.endpoints.addCart.method,
    config.cart.endpoints.addCart.request,
    config.cart.endpoints.addCart.headers,
    data
  );

  yield put(addCartDetailsDispatchActionSuccess(response.count));
}
