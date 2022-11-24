<template>
  <ul>
    <li v-for="p in products" :key="p.id">
      <span>{{ p.title }} - {{ p.price | currency }}</span>
      <button :disabled="!p.inventory" @click="addProductToCart(p)">
        Add to cart
      </button>
      <el-button>test</el-button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: mapActions("cart", ["addProductToCart"]),
  created() {
    // this.getAllProducts();
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>
<style lang="scss" scoped>
li {
  margin: 10px;
  span {
    display: inline-block;
    width: 400px;
  }
}
</style>
