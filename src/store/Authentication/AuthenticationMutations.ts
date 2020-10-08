/**
 @author arthurmita
 created 08/10/2020 at 11:16
 **/

import { State } from '@/store/Authentication/AuthenticationState';
import { MutationTree } from 'vuex';

export enum MutationTypes {
  SET_AUTH_STATUS = 'SET_AUTH_STATUS',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_AUTH_STATUS]: (state: S, payload: boolean) => void
}

export const mutations: MutationTree<State> & Mutations = {
  SET_AUTH_STATUS: (state, payload) => {
    state.isAuthenticated = payload;
  }
};

