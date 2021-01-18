
<template>
   <div class='s-cart-item'> CartItem
    <img class="s-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="img">
    <div class="s-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="s-cart-item__quantity"></div>
    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: "s-cart-item",
  created() {},
  data() {
    return {};
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
  .s-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $pad*2;
    margin-bottom: $marg*2;
    &__image {
      max-width: 50px;
    }
    
  }
</style>

