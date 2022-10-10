import { all, put, takeLatest } from '@redux-saga/core/effects';
import { fetch } from '../../api/core/core';
import { config } from '../../api/config';
import { ProductsActionTypes } from './types';
import { getProductsDispatchActionSuccess } from './dispatchers';

/** Initial Saga */
export function* productsSaga() {
  yield all([takeLatest(ProductsActionTypes.GET_PRODUCTS, getProducts)]);
}

/** Saga Functions */
function* getProducts(action) {
  /** Ejecutamos la petición */
  const response = yield fetch(
    config.products.endpoints.getProducts.method,
    config.products.endpoints.getProducts.request,
    config.products.endpoints.getProducts.headers
  );

  yield put(getProductsDispatchActionSuccess(response));
}
