<template>
  <div class="s-main-wrapper">
    <SCatalog />
    <SCart />
  </div>
</template>
<script>
import SCatalog from "./S-catalog";
import SCart from "./S-cart";

export default {
  name: "s-main-wrapper",
  components: {
    SCatalog,
    SCart,
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  margin: 0 auto;
}
</style>