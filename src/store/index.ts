/**
 @author arthurmita
 created 08/10/2020 at 11:06
 **/

import { State } from '@/store/Authentication/AuthenticationState';
import { createStore } from 'vuex';
import { authModule } from '@/store/Authentication/AuthenticationModule';
import { cartModule } from '@/store/Cart/CartModule';
import { productsModule } from '@/store/Products/ProductsModule';
import { ActionTypes as CartActions } from '@/store/Cart/CartActions';
import { GetterTypes as CartGetters } from '@/store/Cart/CartGetters';
import { ActionTypes as AuthActions } from '@/store/Authentication/AuthenticationActions';
import { GetterTypes as AuthGetters } from '@/store/Authentication/AuthenticationGetter';
import { GetterTypes as ProductGetters } from '@/store/Products/ProductsGetters';

export enum Modules {
  AUTH = 'auth',
  CART = 'cart',
  PRODUCTS = 'products'
}

const store = createStore({
  modules: {
    [Modules.AUTH]: authModule,
    [Modules.CART]: cartModule,
    [Modules.PRODUCTS]: productsModule
  }
});

export type RootState = State
export { CartActions, CartGetters, AuthActions, AuthGetters, ProductGetters };
export default store;