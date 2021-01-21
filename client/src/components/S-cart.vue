<template>
  <div class="s-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="s-catalog__link_to_cart">Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">There are no products in cart...</p>
    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_d="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from "./S-cart-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "s-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },
};
</script>

<style lang="scss">
.s-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16 24;
    display: flex;
    justify-content: center;
    // background: $green-bg;
    color: #ffffff;
    font-size: 20px;
  }
}
</style>