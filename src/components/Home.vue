<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <router-link to="/account" class="btn btn-success ">Submit Account Details</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'DRIP CAPITAL ASSIGNMENT'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
