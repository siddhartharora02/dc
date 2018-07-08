<template>
  <div class="photo-upload">
    <h1>{{ msg }}</h1>
    <form id="photo-upload-form" @submit.prevent="upload('photoUpload')" enctype="multipart/form-data" method="post">
      <input type="file" id="photoUpload" name="photoUpload" @change="onFileSelected" ref="photo">
      <button type="submit" class="btn btn-secondary width100">Upload</button>
    </form>
    <br><br><br><br>

    <form id="pan-upload-form" @submit.prevent="upload('panUpload')" enctype="multipart/form-data" method="post">
      <input type="file" id="panUpload" name="panUpload" @change="onFileSelected">
      <button type="submit" class="btn btn-secondary width100">Upload</button>
    </form>
    <br><br><br><br>

    <form id="aadhar-upload-form" @submit.prevent="upload('aadharUpload')" enctype="multipart/form-data" method="post">
      <input type="file" id="aadharUpload" name="aadharUpload" @change="onFileSelected">
      <button type="submit" class="btn btn-secondary width100">Upload</button>
    </form>
    <br><br><br><br>

    <br>
    <div class="progress">
      <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="'width :'+uploadComplete+'%'" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <router-link :to="{name:'Bank', params:{'mid':$route.params.id}}">Check</router-link>

    {{alerts}}
  </div>
</template>

<script>
export default {
  name: 'PhotoUploadForm',
  props: ['uid'],
  data () {
    return {
      msg: 'Welcome to Photo Upload page',
      alerts: '',
      photoUpload:null,
      panUpload:null,
      aadharUpload:null,
      uploadComplete:"",
    }
  },
  methods:{
    onFileSelected(e){
      this.e = e.target.files[0];
    },
    upload(e){
      const fd = new FormData();
      fd.append(e,this.e);
      fd.append('folderId',this.$route.params.id);
      this.$http.post(this.$http.$root+'/upload/'+e,fd, {
        onUploadProgress: uploadEvent => {
          this.uploadComplete = Math.round(uploadEvent.loaded / uploadEvent.total*100);
        }
      }).then(res => {
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
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
a {
  color: #42b983;
}
</style>
