/**
 @author arthurmita
 created 08/10/2020 at 12:38
 **/

import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store';
import { State } from '@/store/Cart/CartState';
import { CartItem } from '@/components/cart/Types';
import { MutationTypes } from '@/store/Cart/CartMutations';

export enum ActionTypes {
  ADD_TO_CART = 'addCartItem',
  REMOVE_CART_ITEM = 'removeCartItem'
}

export type Actions = {
  [ActionTypes.ADD_TO_CART]: (cxt: ActionContext<State, RootState>, payload: CartItem) => void
  [ActionTypes.REMOVE_CART_ITEM]: (ctx: ActionContext<State, RootState>, payload: String) => void
}

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionTypes.ADD_TO_CART]: ({ commit }, payload) => commit(MutationTypes.ADD_CART_ITEM, payload),
  [ActionTypes.REMOVE_CART_ITEM]: ({ commit }, payload) => commit(MutationTypes.REMOVE_CART_ITEM, payload)
};