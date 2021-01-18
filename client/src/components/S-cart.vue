
<template>
  <div class="s-cart">
    cart
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <v-cart-item
      v-for="item in cart_data"
      :key="item.article"
      :cart_item_data="item"
    />
  </div>
</template>

<script>
import sCartItem from "./S-cart-item";
export default {
  name: "s-cart",
  comments: {
    sCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.s-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $pad * 2 $pad * 3;
    display: flex;
    justify-content: center;
    // background: $green-bg;
    color: #ffffff;
    font-size: 20px;
  }
  .total__name {
    margin-right: $marg * 2;
  }
}
</style>

