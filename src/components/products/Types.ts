/**
 @author arthurmita
 created 08/10/2020 at 09:37
 **/

export type Product = {
  id: string
  image: string
  title: string
  description: string
  price: number
}

export type Products = Array<Product>