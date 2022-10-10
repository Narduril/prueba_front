import { produce } from 'immer';
import { ProductsActionTypes, productsDefaultState } from './types';

export const productsReducer = (state = productsDefaultState(), action) => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return produce(state, (copyState) => {
        copyState.list = action.products;
      });

    default:
      break;
  }

  return state;
};
