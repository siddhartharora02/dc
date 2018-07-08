<template>
  <div class="uploads">
    <div class="container">
      <h1>Step 2 of 4</h1>
      <h2 class="mt-4 mb-2">Upload Documents</h2>
      <h3 class="mb-5">Choose and Upload your Photo and KYC Documents (PAN Card, Aadhar Card and Passport)</h3>
      <div class="row">
        <div class="col">
          <Upload :uid="id"></Upload>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Upload from '@/components/Upload';
  export default {
    name: 'Uploads',
    props: ['id'],
    components: {Upload}
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
