<template>
    <div class="shopping">
        <!-- <h1>Shopping Cart Example</h1>
        <hr /> -->
        <h2>商品列表</h2>
        <hr />
        <product-list></product-list>
        <hr />
        <h2>我的购物车</h2>
        <hr />
        <cart></cart>
    </div>
</template>

<script>
import ProductList from '../components/shopping/ProductList.vue';
import Cart from '../components/shopping/Cart.vue';
export default {
    name: "Shopping",
    components: { ProductList, Cart }
};
</script>
