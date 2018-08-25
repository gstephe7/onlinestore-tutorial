<template>

  <div id="app">

    <Navbar></Navbar>

    <router-view/>

    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>

  </div>

</template>


<script>
import Navbar from '@/components/Navbar';
import toastr from 'toastr';
import {
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS
} from './store/mutation-types'

export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      cartItems: this.$store.state.cart
    }
  },
  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
        }
      }
    })
  },
  computed: {
    cartItemsCount () {
      // Cart count
      return this.cartItems.length
    },
    showLoader () {
      // Loading spinner
      return this.$store.state.showLoader
    }
  }
};

</script>


<style>

  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #505151;
    overflow-x: hidden;
  }

  .title {
    text-align: center;
    padding: 15px;
    border-bottom: thin solid #e0e1e2;
  }

</style>
