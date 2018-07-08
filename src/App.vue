<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Varela Round', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
  .form-group{
    text-align: left;
  }
  h2{
    font-size: 24px;
    font-weight: 600 !important;
  }
  h3{
    font-size: 18px;
    color: #a3a3a3;
  }
</style>
