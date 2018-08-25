<template>

  <div>
    <div class="title">
      <h1>In Stock</h1>
    </div>
    <product-list></product-list>
  </div>

</template>

<script>
import ProductList from '../components/ProductList'
export default {
  name: 'home',
  components: {
    'product-list': ProductList
  },
  data() {
    return {
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
