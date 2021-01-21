<template>
  <div class="s-catalog">
    <router-link :to="{ name: 'cart'}">
      <div class="s-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>

    <h1 class="catalog-title">Catalog</h1>
    <div class="s-catalog__list">
      <SCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import SCatalogItem from "./S-catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "s-catalog",
  components: {
    SCatalogItem,
  },
  props: {},
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    // this.PRODUCTS();
  },
};

</script>






<style lang="scss">
@import "@/assets/styles/styles.scss";
.s-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__link_to_cart {
    position: fixed;
    top: 0px;
    right: 0px;
    padding: $pad * 2;
    border: solid 1px #ffffff;
    background: #7dcc9e;
  }
}
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>

