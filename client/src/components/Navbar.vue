<template>

  <nav>
    <div>
      <ul>

        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>

      </ul>
    </div>
  </nav>

</template>

<script>

export default {
  name: 'Navbar'
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  nav {
    background-color: #505151;
    width: 100vw;
  }

  ul {
    margin-top: 10px;
  }

  li, a {
    margin-left: 10px;
    display: inline-block;
    color: #e0e1e2;
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
    transition: 250ms all;
  }

  li:hover, a:hover {
    color: #e8e0ab;
    transform: scale(1.01);
  }

</style>
