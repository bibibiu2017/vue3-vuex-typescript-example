/**
 @author arthurmita
 created 08/10/2020 at 12:58
 **/
import { Module } from 'vuex';
import { RootState } from '@/store';
import { state, State } from '@/store/Cart/CartState';
import { mutations } from '@/store/Cart/CartMutations';
import { actions } from '@/store/Cart/CartActions';
import { getters } from '@/store/Cart/CartGetters';

export const cartModule: Module<State, RootState> = {
  namespaced: true,
  state: () => state,
  mutations: mutations,
  actions: actions,
  getters: getters
};