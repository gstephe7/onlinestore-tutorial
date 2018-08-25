<template>

  <div class="product-item">
    <router-link :to="'/details/'+product._id" class="product-link">
      <div class="image-div">
        <img class="product-image" :src="product.image" alt="">
      </div>
      <div class="product-info">
        <div class="product-description">
          <h4>{{ product.name }} - {{ product.name.replace(/[^a-zA-Z0-9]/gi, "").length }}</h4>
        </div>
        <div class="product-price">
          ${{ product.price }}
        </div>
      </div>
    </router-link>
    <div class="product-action">
      <product-button :product="product"></product-button>
    </div>
  </div>

</template>

<script>
import ProductButton from './ProductButton.vue'
export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton
  }
}

</script>

<style scoped>

  .image-div {
    display: flex;
    justify-content: center;
  }

  .product-image {
    height: 200px;
  }

  .product-info {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;
  }

  .product-action {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;
  }

</style>
