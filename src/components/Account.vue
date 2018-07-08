<template>
  <div class="account">
    <div class="container">
      <h1>Step 1 of 4</h1>
      <h2 class="mt-4 mb-2">Basic Details</h2>
      <h3 class="mb-5">Submit your basic details to get started!</h3>

      <div class="row">
        <div class="col-6 offset-3">
          <AccountForm></AccountForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountForm from '@/components/Account-Form';
export default {
  name: 'account',
  components: {AccountForm}
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
a {
  color: #42b983;
}
</style>
