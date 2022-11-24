<template>
  <div class="cart">
      <p v-show="!products.length">
          <i>Please add some products to cart.</i>
      </p>
      <ul>
          <li v-for="p in products" :key="p.id">{{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}</li>
      </ul>
      <p>Total: {{ total | currency }}</p>
      <p>
          <button :disabled="!products.length" @click="checkout(products)">Checkout</button>
      </p>
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
export default {
  computed: {
      ...mapState({
          checkoutStatus: (state) => state.cart.checkoutStatus
      }),
      ...mapGetters('cart', {
          products: 'cartProducts',
          total: 'cartTotalPrice'
      })
  },
  methods: {
      checkout(products) {
          this.$store.dispatch('cart/checkout', products);
      }
  }
};
</script>
<style lang="scss" scoped>
li {
  margin: 10px;
}
</style>
