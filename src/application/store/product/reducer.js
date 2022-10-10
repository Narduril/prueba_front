import { produce } from 'immer';
import { ProductActionTypes, productDefaultState } from './types';

export const productReducer = (state = productDefaultState(), action) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return produce(state, (copyState) => {
        copyState.details = action.details;
      });

    default:
      break;
  }

  return state;
};
