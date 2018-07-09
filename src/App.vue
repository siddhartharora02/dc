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
h1 span{
  font-size: 22px;
  color: #a3a3a3;
}
label{
  color: #A3A3A3;
  font-size:14px;
}
input.form-control{
  display: block;
  width: 100%;
  height: 48px;
  padding-right: 8px;
  padding-left: 8px;
  color: #525753;
  overflow: auto;
  resize: none;
  font-size:16px;
  outline: none;
  border: 2px solid #E5E5E5;
  border-radius: 4px;
  -webkit-transition: all 0.30s ease-in-out;
}
button.btn{
  height: 40px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 500 ;
}
</style>
