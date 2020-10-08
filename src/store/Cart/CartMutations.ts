/**
 @author arthurmita
 created 08/10/2020 at 12:42
 **/
import { State } from '@/store/Cart/CartState';
import { CartItem } from '@/components/cart/Types';
import { MutationTree } from 'vuex';

export enum MutationTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
}

export type Mutations<S = State> = {
  [MutationTypes.ADD_CART_ITEM]: (state: S, payload: CartItem) => void,
  [MutationTypes.REMOVE_CART_ITEM]: (state: S, payload: string) => void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD_CART_ITEM]: (state, payload) => {
    const existingItem = state.items.find(item => item.productId === payload.productId);
    if (existingItem) {
      existingItem.qty = existingItem.qty + 1;
    } else
      state.items = [...state.items, payload];
  },
  [MutationTypes.REMOVE_CART_ITEM]: (state, payload) => {
    const existingItem = state.items.find(item => item.productId === payload);
    if (!existingItem)
      return;
    if (existingItem.qty > 1) {
      existingItem.qty = existingItem.qty - 1;
    } else {
      state.items = [...state.items.filter(item => item.productId !== payload)];
    }
  }
};