<template>

  <div class="products">
    <div class="product" v-for="product in products">
      <product-item :product="product" ></product-item>
    </div>
  </div>

</template>

<script>

  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    components: {
      'product-item': ProductItem
    }
  }

</script>

<style scoped>

  .products {
    display: flex;
    flex-flow: row wrap;
  }

  .product {
    flex: 1;
    min-width: 300px;
    margin: 20px;
  }

</style>
