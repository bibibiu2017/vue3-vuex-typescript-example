/**
 @author arthurmita
 created 08/10/2020 at 09:50
 **/

export type CartItem = {
  productId: string,
  title: string,
  image: string,
  price: number,
  qty: number
}

export type CartItems = Array<CartItem>

export type Cart = {
  items: CartItems
}