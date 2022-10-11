import { all, put, takeLatest } from '@redux-saga/core/effects';
import { fetch } from '../../api/core/core';
import { config } from '../../api/config';
import { ProductActionTypes } from './types';
import { getProductDetailsDispatchActionSuccess } from './dispatchers';

/** Initial Saga */
export function* productSaga() {
  yield all([
    takeLatest(ProductActionTypes.GET_PRODUCT_DETAILS, getProductDetails)
  ]);
}

/** Saga Functions */
function* getProductDetails(action) {
  const request = `${config.product.endpoints.getProductDetails.request}/${action.id}`;

  /** Ejecutamos la petición */
  const response = yield fetch(
    config.product.endpoints.getProductDetails.method,
    request,
    config.product.endpoints.getProductDetails.headers
  );

  yield put(getProductDetailsDispatchActionSuccess(response));
}
