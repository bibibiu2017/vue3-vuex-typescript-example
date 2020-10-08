/**
 @author arthurmita
 created 08/10/2020 at 11:30
 **/

import { ActionContext, ActionTree } from 'vuex';
import { State } from '@/store/Authentication/AuthenticationState';
import { RootState } from "@/store";
import { MutationTypes } from '@/store/Authentication/AuthenticationMutations';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export type Actions = {
  [ActionTypes.LOGIN]: (context: ActionContext<State, RootState>) => void
  [ActionTypes.LOGOUT]: (context: ActionContext<State, RootState>) => void
}

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionTypes.LOGIN]: ({ commit }) => commit(MutationTypes.SET_AUTH_STATUS, true),
  [ActionTypes.LOGOUT]: ({ commit }) => commit(MutationTypes.SET_AUTH_STATUS, false)
};