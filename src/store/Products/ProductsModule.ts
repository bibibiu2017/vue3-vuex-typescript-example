/**
 @author arthurmita
 created 08/10/2020 at 13:56
 **/
import { Module } from 'vuex';
import { RootState } from '@/store';
import { state, State } from '@/store/Products/ProductsState';
import { getters } from '@/store/Products/ProductsGetters';

export const productsModule: Module<State, RootState> = {
  namespaced: true,
  state: () => state,
  getters: getters
};