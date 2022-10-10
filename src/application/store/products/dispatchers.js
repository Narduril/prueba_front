import { ProductsActionTypes } from './types';

/** Dispatch Action */
export const getProductsDispatchAction = () => ({
  type: ProductsActionTypes.GET_PRODUCTS
});

/** Dispatch Action Success */
export const getProductsDispatchActionSuccess = (products) => ({
  type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
  products
});
