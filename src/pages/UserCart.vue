<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount:
      <base-badge mode="elegant">${{ cartTotal }}</base-badge>
    </h3>
    <ul>
      <cart-item v-for="item in cartItems" :key="item.productId" :cart-item="item"></cart-item>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartItem from '@/components/cart/CartItem.vue';
import BaseBadge from '@/components/ui/BaseBadge.vue';
import { CartGetters, Modules } from '@/store';
import { mapGetters } from 'vuex';
import { CartItems } from '@/components/cart/Types';

export default defineComponent({
  components: {
    CartItem, BaseBadge
  },
  computed: {
    cartTotal(): String {
      return this.getCartItemsTotal(this.cartItems);
    },
    cartItems(): CartItems {
      return this.getCartItems;
    },
    ...mapGetters(Modules.CART, [CartGetters.GET_CART_ITEMS])
  },
  methods: {
    getCartItemsTotal(items: CartItems): String {
      return items.reduce((prevAmount, item) => (item.qty * item.price) + prevAmount, 0).toFixed(2);
    }
  }
});
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>