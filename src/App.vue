<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/nav/TheHeader.vue';
import { Cart} from '@/components/cart/Types';

export default defineComponent({
  components: {
    TheHeader
  },
  data() {
    return {
      isLoggedIn: false,
      cart: {
        items: [],
        total: 0,
        qty: 0
      } as Cart
    };
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>