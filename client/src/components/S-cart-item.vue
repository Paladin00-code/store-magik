<template>
  <div class='s-cart-item'>
    <img class="s-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="">
    <div class="s-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <!-- <p>{{cart_item_data.article}}</p> -->
    </div>
    <div class="s-cart-item__quantity">
      {{cart_item_data.quantity||1}}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
  export default {
    name: "s-cart-item",
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    
    computed: {},
    mounted() {
      
    },
  }
</script>

<style lang="scss">
  .s-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8;
    margin-bottom: 8;
    &__image {
      max-width: 50px;
    }
   
  }
</style>