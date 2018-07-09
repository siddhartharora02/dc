<template>
  <div class="upload">


  </div>
</template>

<script>
  export default {
    name: 'Upload',
    props: ['uid','profileCompletenessProp'],
    components:{PhotoUploadModal,PanUploadModal,AadharUploadModal,PassportUploadModal},
    data () {
      return {
        msg: 'Welcome to Photo Upload page',
        alerts: '',
        photo: false,
        pan: false,
        aadhar: false,
        passport: false,
        profileCompleteness : '',
      }
    },
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
</style>
