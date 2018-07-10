<template>
  <div class="modal fade" id="passportUploadModal" tabindex="-1" role="dialog" aria-labelledby="passportUploadModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="passportUploadModalLabel">Passport Upload Modal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="upload-form" id="passport-upload-form" @submit.prevent="upload('passportUpload')" enctype="multipart/form-data" method="post">
            <a class='d-block position-relative'>
              {{fileName}}
              <input type="file" id="passportUpload" name="passportUpload" class="inputFile" @change="onFileSelected" required>
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
    name: 'PassportUploadModal',
    props: ['uid'],
    data () {
      return {
        msg: 'Welcome to Photo Upload page',
        alerts: '',
        passportUpload:null,
        uploadComplete:'',
        fileName:'Choose File'
      }
    },
    methods:{
      onFileSelected(e){
        this.uploadComplete = ''
        this.fileName = e.target.files[0].name;
        if(e.target.id == 'passportUpload'){
          this.passportUpload = e.target.files[0];
        }
      },
      upload(e){
        let target;
        const fd = new FormData();
        if(e == "passportUpload"){
          fd.append(e,this.passportUpload);
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
        this.$emit('passportUploaded', true);
        let modal = '#'+this.$el.id.toString();
        $(modal).find('button').trigger('click');
      }
    }
  }
</script>
