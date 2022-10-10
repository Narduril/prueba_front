import { all, takeLatest } from '@redux-saga/core/effects';
import { ProductActionTypes } from './types';

/** Initial Saga */
export function* productSaga() {
  yield all([
    takeLatest(ProductActionTypes.GET_PRODUCT_DETAILS, getProductDetails)
  ]);
}

/** Saga Functions */
function* getProductDetails(action) {
  console.log(action);
  yield console.log('Petición get product');
}
