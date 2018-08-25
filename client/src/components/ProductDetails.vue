<template>
  <div class="product-details">
    <div class="container">
      <div class="image-div" :class="{ 'zoomed-div' : zoom }">
        <img class="product-details-image" :class="{ zoomed : zoom }" @click="toggleZoom" :src="product.image" alt="">
      </div>
      <div class="product-details-info">
        <div class="product-details-description">
          <small>{{product.manufacturer && product.manufacturer.name}}</small>
          <h3>{{product.name}}</h3>
          <p>
            {{product.description}}
          </p>
        </div>
        <div class="product-details-price-cart">
          <p>${{product.price}}</p>
          <product-button :product="product" ></product-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton'
  export default {
    props: ['product'],
    components: {
      'product-button': ProductButton
    },
    data() {
      return {
        zoom: false
      }
    },
    methods: {
      toggleZoom() {
        this.zoom = !this.zoom
      }
    }
  }
</script>

<style scoped>

  .product-details {
    padding: 20px;
    margin: auto;
    width: 90%;
  }

  .container {
    display: flex;
    flex-flow: row wrap;
  }

  .img-div {
    width: 200px;
    flex: 1;
  }

  .product-details-info {
    flex: 1;
    margin-top: 20px;
  }

  .product-details-image {
    width: 200px;
    cursor: zoom-in;
    transition: all 500ms ease;
  }

  p, h3 {
    margin-bottom: 10px;
  }

  .zoomed {
    width: 300px;
    cursor: zoom-out;
    display: block;
    margin: auto;
  }

  .zoomed-div {
    display: block;
    width: 100%;
  }

</style>
