<template>
  <div class="profile-complete">
    <div class="container">
      <h1>Step 4 of 4</h1>
      <h2 class="mt-4 mb-2">Profile Completeness</h2>
      <h3 class="mb-5">Check if your profile is complete or not!</h3>
      <h1 class="text-center">Your Profile is {{profileCompleteness}} complete</h1>
      <div class="progress">
        <div class="progress-bar progress-bar-striped" :class="(profileCompleteness == '100%')? 'bg-success':'bg-warning'" role="progressbar" :style="'width:'+ profileCompleteness" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h2>Summary</h2>
          <h3 :class="(account)?'text-success':'text-danger'"><b>Account Details</b> : <span v-if="account"><i class="fas fa-check"></i></span> <span v-if="!account"><i class="fas fa-times"></i></span> </h3>
          <h3 :class="(photo)?'text-success':'text-danger'">Photo Uploaded : <span v-if="photo"><i class="fas fa-check"></i></span> <span v-if="!photo"><i class="fas fa-times"></i></span></h3>
          <h3 :class="(pan)?'text-success':'text-danger'">Pan Uploaded : <span v-if="pan"><i class="fas fa-check"></i></span> <span v-if="!pan"><i class="fas fa-times"></i></span></h3>
          <h3 :class="(aadhar)?'text-success':'text-danger'">Aadhar Uploaded : <span v-if="aadhar"><i class="fas fa-check"></i></span> <span v-if="!aadhar"><i class="fas fa-times"></i></span></h3>
          <h3 :class="(passport)?'text-success':'text-danger'">Passport Uploaded : <span v-if="passport"><i class="fas fa-check"></i></span> <span v-if="!passport"><i class="fas fa-times"></i></span></h3>
          <h3 :class="(bank)?'text-success':'text-danger'">Bank Details : <span v-if="bank"><i class="fas fa-check"></i></span> <span v-if="!bank"><i class="fas fa-times"></i></span></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        profileCompleteness : '',
        account: false,
        photo: false,
        pan: false,
        aadhar: false,
        passport: false,
        bank: false
      }
    },
    methods:{
      fetchData(){
        this.$http.get(this.$http.$root+'/user/'+this.$route.params.id).then(res=>{
          this.profileCompleteness = res.data.counter;
          if(res.data.items.includes('account')){
            this.account = true;
          }
          if(res.data.items.includes('photo')){
            this.photo = true;
          }
          if(res.data.items.includes('pan')){
            this.pan = true;
          }
          if(res.data.items.includes('passport')){
            this.passport = true;
          }
          if(res.data.items.includes('aadhar')){
            this.aadhar = true;
          }
          if(res.data.items.includes('bank')){
            this.bank = true;
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    created(){
      this.fetchData();
    }
  }

</script>

<style>

</style>
