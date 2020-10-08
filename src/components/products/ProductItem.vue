<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :alt="cartItem.title" :src="cartItem.image" />
      </div>
      <div class="product__text">
        <h3>{{ cartItem.title }}</h3>
        <base-badge :no-margin-left="true" mode="highlight">
          <h4>${{ cartItem.price }}</h4>
        </base-badge>
        <p>{{ cartItem.description }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapActions } from 'vuex';
import BaseBadge from '@/components/ui/BaseBadge.vue';
import { CartActions, Modules } from '@/store';
import { CartItem } from '@/components/cart/Types';

export default defineComponent({
  name: 'ProductItem',
  props: {
    cartItem: {
      type: Object as PropType<CartItem>,
      required: true
    }
  },
  components: {
    BaseBadge
  },
  methods: {
    ...mapActions(Modules.CART, [CartActions.ADD_TO_CART]),
    addToCart() {
      this.addCartItem(this.cartItem);
    }
  },
});
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>