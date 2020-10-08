<template>
  <li>
    <div>
      <img :alt="cartItem.title" :src="cartItem.image" />
    </div>
    <div>
      <h3>{{ cartItem.title }}</h3>
      <div class="item__data">
        <div>
          Price per Item:
          <strong>${{ cartItem.price }}</strong>
        </div>
        <div>
          Quantity:
          <strong>{{ cartItem.qty }}</strong>
        </div>
      </div>
      <div class="item__total">Total: ${{ itemTotal }}</div>
      <button @click="remove">Remove</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CartItem } from '@/components/cart/Types';
import { mapActions } from 'vuex';
import { CartActions, Modules } from '@/store';

export default defineComponent({
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object as PropType<CartItem>,
      required: true
    }
  },
  computed: {
    itemTotal(): String {
      return (this.cartItem.price * this.cartItem.qty).toFixed(2);
    }
  },
  methods: {
    ...mapActions(Modules.CART, [CartActions.REMOVE_CART_ITEM]),
    remove() {
      this.removeCartItem(this.cartItem.productId);
    }
  }
});
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
}
</style>