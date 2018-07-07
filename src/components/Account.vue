<template>
  <div class="account">
    <AccountForm></AccountForm>
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
