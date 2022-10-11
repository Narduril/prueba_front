import { produce } from 'immer';
import { CartActionTypes, cartDefaultState } from './types';

export const cartReducer = (state = cartDefaultState(), action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART_SUCCESS:
      return produce(state, (copyState) => {
        copyState.count = copyState.count + action.count;
      });

    default:
      break;
  }

  return state;
};
