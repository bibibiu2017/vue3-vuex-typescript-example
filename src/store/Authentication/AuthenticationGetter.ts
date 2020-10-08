/**
 @author arthurmita
 created 08/10/2020 at 11:45
 **/

import { GetterTree } from 'vuex';
import { State } from '@/store/Authentication/AuthenticationState';
import { RootState } from '@/store';

export enum GetterTypes {
  GET_AUTHENTICATION = 'isAuthenticated'
}

export type Getters = {
  [GetterTypes.GET_AUTHENTICATION]: (state: State) => boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
  isAuthenticated: state => state.isAuthenticated
};