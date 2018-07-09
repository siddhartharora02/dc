<template>
  <div class="uploads">
    <div class="container">
      <h1>Step 2 of 4 <span>(Profile {{profileCompleteness}} completed)</span></h1>
      <div class="progress">
        <div class="progress-bar progress-bar-striped" :class="(profileCompleteness == '100%')? 'bg-success':'bg-warning'" role="progressbar" :style="'width:'+ profileCompleteness" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <h2 class="mt-4 mb-2">Upload Documents</h2>
      <h3 class="mb-5">Choose and Upload your Photo and KYC Documents (PAN Card, Aadhar Card and Passport)</h3>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-3">
              <a class="uploadbox" data-toggle="modal" data-target="#photoUploadModal" :class="(photo)? 'uploaded':''"  >
                <div class="icon">
                  <i class="far fa-image"></i>
                </div>
                <div class="uploadTitle">
                  {{(photo)?'Photo Uploaded':'Upload Photo'}}

                </div>
              </a>
            </div>
            <div class="col-3">
              <a class="uploadbox" data-toggle="modal" data-target="#panUploadModal"  :class="(pan)? 'uploaded':''" >
                <div class="icon">
                  <i class="far fa-id-card"></i>
                </div>
                <div class="uploadTitle">
                  {{(pan)?'PAN Uploaded':'Upload PAN'}}
                </div>
              </a>
            </div>
            <div class="col-3">
              <a class="uploadbox" data-toggle="modal" data-target="#aadharUploadModal" :class="(aadhar)? 'uploaded':''" >
                <div class="icon">
                  <i class="fas fa-id-card-alt"></i>
                </div>
                <div class="uploadTitle">
                  {{(aadhar)?'Aadhar Uploaded':'Upload Aadhar'}}
                </div>
              </a>
            </div>
            <div class="col-3">
              <a class="uploadbox" data-toggle="modal" data-target="#passportUploadModal"  :class="(passport)? 'uploaded':''" >
                <div class="icon">
                  <i class="fas fa-passport"></i>
                </div>
                <div class="uploadTitle">
                  {{(passport)?'Passport Uploaded':'Upload Passport'}}
                </div>
              </a>
            </div>
          </div>

          <br>
          <hr>
          <router-link :to="{name:'Bank', params:{'mid':$route.params.id}}" class="btn btn-success mt-3 float-right" tag="button">Proceed to Next Step</router-link>

          {{alerts}}



          <PhotoUploadModal @photoUploaded="handler"></PhotoUploadModal>
          <PanUploadModal @panUploaded="handler"></PanUploadModal>
          <AadharUploadModal @aadharUploaded="handler"></AadharUploadModal>
          <PassportUploadModal @passportUploaded="handler"></PassportUploadModal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PhotoUploadModal from './modals/PhotoUploadModal';
  import PanUploadModal from './modals/PanUploadModal';
  import AadharUploadModal from './modals/AadharUploadModal';
  import PassportUploadModal from './modals/PassportUploadModal';

  export default {
    name: 'Uploads',
    props: ['id'],
    data(){
      return{
        msg: 'Welcome to Photo Upload page',
        alerts: '',
        photo: false,
        pan: false,
        aadhar: false,
        passport: false,
        profileCompleteness : '',
      }
    },
    components:{PhotoUploadModal,PanUploadModal,AadharUploadModal,PassportUploadModal},
    methods:{
      fetchData(){
        console.log(this.$route.params.id);
        this.$http.get(this.$http.$root+'/uploads/'+this.$route.params.id).then(res=>{
          console.log(res.data);
          if(res.data.photo){
            this.photo = true;
          }
          if(res.data.pan){
            this.pan = true;
          }
          if(res.data.aadhar){
            this.aadhar = true;
          }
          if(res.data.passport){
            this.passport = true;
          }
        }).catch(err => {
          console.log(err);
        })
      },
      fetchPC(){
        this.$http.get(this.$http.$root+'/user/'+this.$route.params.id).then(res=>{
          this.profileCompleteness = res.data.counter
        }).catch(err => {
          console.log(err);
        })
      },
      handler(){
        this.fetchPC();
        this.fetchData();
      }
    },
    created(){
      this.fetchData();
      this.fetchPC();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

.uploadbox{
  border:2px dashed #ccc;
  display:block;
  padding: 60px 0;
  text-align: center;
  cursor: pointer;
  background: #f9f9f9;
}
.uploadbox.uploaded{
  background: #e8f5e9;
  border:2px dashed #28a745;
}
.icon{
  font-size: 50px;
  color: #a3a3a3;
}
.uploadTitle{
  font-size: 16px;
}
.inputFile{
  position:absolute;
  z-index:2;
  top:0;
  left:0;
  filter: alpha(opacity=0);
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  opacity:0;
  background-color:transparent;
  color:transparent;
  width: 100%;
  cursor: pointer;
  height: 100%;
}
.upload-form a{
  border: 3px dashed #ccc;
  padding: 30px;
  text-align: center;
}
</style>
