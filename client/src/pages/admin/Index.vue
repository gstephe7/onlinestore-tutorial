<template>

  <div class="container">
    <div class="menu">
      <ul>
        <li><router-link to="/admin">View Products</router-link></li>
        <li><router-link to="/admin/new">New Product</router-link></li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'admin'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    padding: 15px;
    display: flex;
    flex-flow: row wrap;
  }

  .menu {
    flex: 1;
    min-width: 100px;
  }

  li {
    border: 1px solid white;
    padding: 10px;
    background-color: #e8e0ab;
  }

  .main {
    flex: 4;
    padding: 20px;
    min-width: 300px;
  }

</style>
