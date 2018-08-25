<template>
  <div class="">
    <div v-if="cart.length > 0">
      <div class="title">
        <h1>Your Cart</h1>
      </div>
      <template v-for="product in cart">
        <product-details :product="product" :key="product.id" ></product-details>
      </template>
    </div>
    <div v-else class="title"><h1>Your Cart is Empty</h1></div>
  </div>

</template>

<script>
import ProductDetails from '../components/ProductDetails'
export default {
  name: 'cart',
  data() {
    return {
      cart: this.$store.state.cart,
    }
  },
  components: {
    'product-details': ProductDetails
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
