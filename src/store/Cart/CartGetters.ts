/**
 @author arthurmita
 created 08/10/2020 at 12:55
 **/

import { State } from '@/store/Cart/CartState';
import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { CartItems } from '@/components/cart/Types';

export enum GetterTypes {
  GET_CART_QUANTITY = 'getCartQuantity',
  GET_CART_ITEMS = 'getCartItems',

}

export type Getters = {
  [GetterTypes.GET_CART_QUANTITY]: (state: State) => number
  [GetterTypes.GET_CART_ITEMS]: (state: State) => CartItems
}

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterTypes.GET_CART_QUANTITY]: state => state.items.reduce((prev, cur) => prev + cur.qty ,0),
  [GetterTypes.GET_CART_ITEMS]: state => state.items,
};