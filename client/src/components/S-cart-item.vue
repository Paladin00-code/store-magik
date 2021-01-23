<template>
  <div class="s-cart-item">
    <img
      class="s-cart-item__image"
      :src="require('../assets/images/' + cart_item_d.image)"
      alt=""
    />
    <div class="s-cart-item__info">
      <p>{{ cart_item_d.name }}</p>
      <p>{{ cart_item_d.article }}</p>
    </div>

    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "s-cart-item",
  props: {
    cart_item_d: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.s-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px 0 #807f7f;
  background-color: rgb(189, 209, 151);
  padding: 8;
  margin-bottom: 8;
  &__image {
    max-width: 80px;
  }
}
</style>