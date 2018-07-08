<template>
  <div class="home">
    <div class="container">
      <h1>Step 0 of 4</h1>
      <h2 class="mt-4 mb-2">Profile Completeness</h2>
      <h3 class="mb-5">Check if your profile is complete or not!</h3>
      <h1>{{ msg }}</h1>
      <router-link to="/account" class="btn btn-success ">Submit Account Details</router-link>

    </div>
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
