<template>

  <div>
    <ProductForm @save-product="addProduct" :model="model" :manufacturers="manufacturers"></ProductForm>
  </div>

</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import axios from 'axios';

export default {
  name: 'new',
  data: function() {
    return {
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung'
        },
        {
          _id: 'apple',
          name: "Apple"
        },
      ],
    }
  },
  methods: {
    addProduct(model) {
      this.$store.dispatch({
        type: 'addProduct',
        name: this.model.name,
        image: this.model.image,
        price: this.model.price,
        description: this.model.description
      })
      this.model = {};
    }
  },
  components: { ProductForm }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  

</style>
