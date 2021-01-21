
<template>
  <div class="s-catalog-item">
    <img
      class="s-catalog-item__image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="s-catalog-item__name">name: {{ product_data.name }}</p>
    <p class="s-catalog-item__price">price: {{ product_data.price }} $</p>
      <p class="s-catalog-item__available">
      avalible: {{ product_data.available }}
    </p>
    <p class="s-catalog-item__category">
      category: {{ product_data.category }}
    </p>
    <button
      class="s-catalog-item__add_to_cart_button"
      @click="addToCart"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "S-catalog-item",
  created() {},
  
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {      
      this.$emit('addToCart', this.product_data)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";
.s-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 3px 0 #e0e0e0;
  padding: $pad;
  margin: $marg * 2;
  &__image {
    width: 100px;
  }
  &:hover {
    box-shadow: 15px 15px 10px 8px #ccc3c3;

    transform: scale(1.1);
    transition: 1s;
    z-index: 10;
  }
}
</style>

