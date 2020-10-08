/**
 @author arthurmita
 created 08/10/2020 at 11:56
 **/
import { Module } from 'vuex';
import { State, state } from '@/store/Authentication/AuthenticationState';
import { RootState } from "@/store";
import { mutations } from '@/store/Authentication/AuthenticationMutations';
import { actions } from '@/store/Authentication/AuthenticationActions';
import { getters } from '@/store/Authentication/AuthenticationGetter';

export const authModule: Module<State, RootState> = {
  namespaced: true,
  state: () => state,
  mutations: mutations,
  actions: actions,
  getters: getters,
}