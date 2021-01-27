
<template>
  <div class="s-select">
    <p>Catrgories</p>
    <div class="options">
      <p @click="selectOption('All')" name="All">All</p>
      <p @click="selectOption('male')" name="male">Male</p>
      <p @click="selectOption('female')" name="female">Female</p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "S-select",
  created() {},
  props: {
    options: {
      type: Array,
      default() {
        [];
      },
    },
    selected:{
      type: String,
      default:''
    }
  },

  methods: {
    selectOption(option){
      this.$emit('selectCategory', option)
    }
  },
};
</script>

<style lang="scss" scoped>
.s-select {
  position: absolute;
  top: 0;
  width: 20%;
}
.s-select p {
  margin: 0;
}
.options {
  margin-top: 7px;
  border: 1px solid #d4d1d1;
  position: absolute;
  top: 15px;
  right: 0;
  width: 100%;
}
.options :hover{
  background-color: #d6d2d2;
  cursor: pointer;
}
</style>

