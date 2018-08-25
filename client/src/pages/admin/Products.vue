<template>

  <div>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products">
        <td>{{product.name}}</td>
        <td>${{product.price}}</td>
        <td><router-link class="edit" :to="'/admin/edit/'+product._id">Edit</router-link></td>
        <td><a class="remove" @click="deleteProduct(product._id)" >Remove</a></td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.allProducts
    }
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch('removeProduct', id)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  table {
    border: 1px solid #505151;
  }

  th, td {
    border: 1px solid #505151;
    padding: 5px;
    width: 70px;
  }

  .remove {
    color: #cc3c22;
  }

  .remove:hover {
    cursor: pointer;
  }

  .edit {
    text-decoration: none;
    color: #326cbc;
  }

</style>
