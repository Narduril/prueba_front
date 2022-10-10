import { all, takeLatest } from '@redux-saga/core/effects';
import { ProductsActionTypes } from './types';

/** Initial Saga */
export function* productsSaga() {
  yield all([takeLatest(ProductsActionTypes.GET_PRODUCTS, getProducts)]);
}

/** Saga Functions */
function* getProducts(action) {
  console.log(action);
  yield console.log('Petición get products');
}
