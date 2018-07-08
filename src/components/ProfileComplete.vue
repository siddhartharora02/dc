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

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        profileCompleteness : ''
      }
    },
    methods:{
      fetchData(){
        this.$http.get(this.$http.$root+'/user/'+this.$route.params.id).then(res=>{
          this.profileCompleteness = res.data.counter
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
