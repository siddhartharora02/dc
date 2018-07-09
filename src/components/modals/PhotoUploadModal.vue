<template>
  <div class="modal fade" id="photoUploadModal" tabindex="-1" role="dialog" aria-labelledby="photoUploadModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="photoUploadModalLabel">Photo Upload Modal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="upload-form" id="photo-upload-form" @submit.prevent="upload('photoUpload')" enctype="multipart/form-data" method="post">
              <a class='d-block position-relative'>
                {{fileName}}
                <input type="file" id="photoUpload" name="photoUpload" class="inputFile" @change="onFileSelected">
              </a>
            <input type="submit" class="btn w-100 mb-3 mt-3" :class="(uploadComplete == 100)? 'btn-success':'btn-primary'" :value="(uploadComplete == 100)? 'Uploaded': (uploadComplete == 0) ? 'Upload' : 'Uploading'">
            <div class="progress" v-show="(uploadComplete == 0)? false: true">
              <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="'width :'+uploadComplete+'%'" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </form>
        </div>

      </div>
    </div>

  </div>


</template>
<script>
  export default {
    name: 'PhotoUploadModal',
    props: ['profileCompletenessProp'],
    data () {
      return {
        msg: 'Welcome to Photo Upload page',
        alerts: '',
        photoUpload:null,
        uploadComplete:'',
        fileName:'Choose File',
        profileCompletenessChild:''
      }
    },
    methods:{
      onFileSelected(e){
        this.uploadComplete = ''
        this.fileName = e.target.files[0].name;
        if(e.target.id == 'photoUpload'){
          this.photoUpload = e.target.files[0];
        }
      },
      upload(e){
        let target;
        const fd = new FormData();
        if(e == "photoUpload"){
          fd.append(e,this.photoUpload);
        }
        fd.append('user_id',this.$route.params.id);
        this.$http.post(this.$http.$root+'/upload/'+e,fd, {
          onUploadProgress: uploadEvent => {
            this.uploadComplete = Math.round(uploadEvent.loaded / uploadEvent.total*100);
          }
        }).then(res => {
          console.log("askfna");
        }).catch(err =>{
          console.log(err);
        })
      },
    },
    watch:{
      uploadComplete: function(){
        this.$emit('photoUploaded', true);
      }
    }
  }
</script>

<style>
</style>
