<template>
  <div class="modal fade" id="panUploadModal" tabindex="-1" role="dialog" aria-labelledby="panUploadModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="panUploadModalLabel">Pan Upload Modal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="upload-form" id="pan-upload-form" @submit.prevent="upload('panUpload')" enctype="multipart/form-data" method="post">
            <a class='d-block position-relative'>
              {{fileName}}
              <input type="file" id="panUpload" name="panUpload" class="inputFile" @change="onFileSelected"  required>
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
    name: 'PanUploadModal',
    props: ['uid'],
    data () {
      return {
        msg: 'Welcome to Photo Upload page',
        alerts: '',
        panUpload:null,
        uploadComplete:'',
        fileName:'Choose File'
      }
    },
    methods:{
      onFileSelected(e){
        this.uploadComplete = ''
        this.fileName = e.target.files[0].name;
       if(e.target.id == 'panUpload'){
          this.panUpload = e.target.files[0];
        }
      },
      upload(e){
        let target;
        const fd = new FormData();
        if(e == "panUpload"){
          fd.append(e,this.panUpload);
        }
        fd.append('user_id',this.$route.params.id);
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
    },
    watch:{
      uploadComplete: function(){
        this.$emit('panUploaded', true);
      }
    }

  }
</script>
