import { CartActionTypes } from './types';

/** Dispatch Action */
export const addCartDispatchAction = (id, colorCode, storageCode) => ({
  type: CartActionTypes.ADD_CART,
  id,
  colorCode,
  storageCode
});

/** Dispatch Action Success */
export const addCartDetailsDispatchActionSuccess = (count) => ({
  type: CartActionTypes.ADD_CART_SUCCESS,
  count
});
