/**
 @author arthurmita
 created 08/10/2020 at 12:32
 **/
import { Cart } from '@/components/cart/Types';

export type State = { items: Cart['items'] }

export const state: State = {
  items: []
};