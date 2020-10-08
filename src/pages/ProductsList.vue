<template>
  <section>
    <ul>
      <product-item v-for="prod in products" :key="prod.id" :cart-item="mapToCartItem(prod)"></product-item>
    </ul>
  </section>
</template>

<script lang="ts">
import ProductItem from '@/components/products/ProductItem.vue';
import { defineComponent } from 'vue';
import { CartItem } from '@/components/cart/Types';
import { Product } from '@/components/products/Types';
import { mapGetters } from 'vuex';
import { Modules, ProductGetters } from '@/store';

export default defineComponent({
  components: {
    ProductItem
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts'];
      //return this.getProducts;
    },
    ...mapGetters(Modules.PRODUCTS, [ProductGetters.GET_PRODUCTS])
  },
  methods: {
    mapToCartItem(product: Product): CartItem {
      return {
        productId: product.id,
        qty: 1,
        ...product
      };
    }
  }
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>