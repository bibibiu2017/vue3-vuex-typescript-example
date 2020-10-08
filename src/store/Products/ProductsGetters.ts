/**
 @author arthurmita
 created 08/10/2020 at 13:52
 **/

import { State } from '@/store/Products/ProductsState';
import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { Products } from '@/components/products/Types';

export enum GetterTypes {
  GET_PRODUCTS = 'getProducts'
}

export type Getters = {
  [GetterTypes.GET_PRODUCTS]: (state: State) => Products
}

export const getters: GetterTree<State, RootState> & Getters = {
  getProducts: state => state.products
};