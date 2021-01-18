<template>
  <div id="app">
    <sMainWrapper/>
  </div>
  
  <!-- <router-view/> -->
</template>

<script>
import sMainWrapper from './components/S-main-wrapper'

export default {
  name: 'app',
  components: {
    sMainWrapper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #13304d;
  margin-top: 20px;
}
</style>