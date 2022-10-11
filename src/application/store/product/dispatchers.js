import { ProductActionTypes } from './types';

/** Dispatch Action */
export const getProductDetailsDispatchAction = (id) => ({
  type: ProductActionTypes.GET_PRODUCT_DETAILS,
  id
});

/** Dispatch Action Success */
export const getProductDetailsDispatchActionSuccess = (details) => ({
  type: ProductActionTypes.GET_PRODUCT_DETAILS_SUCCESS,
  details
});
