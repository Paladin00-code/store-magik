<template>
  <div class="s-main-wrapper">
    <router-view></router-view>
  </div>
</template>
<script>
// import SCatalog from "./S-catalog";
// import SCart from "./S-cart";
import { mapGetters } from "vuex";

export default {
  name: "s-main-wrapper",
  // components: {
  //   SCatalog,
  //   SCart,
  // },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  margin: 0 auto;
}
</style>