<template>
  <div class="bank">
    <div class="container">

      <h1>Step 3 of 4</h1>
      <h2 class="mt-4 mb-2">Bank Account</h2>
      <h3 class="mb-5">Add your Bank Account(s) Details!</h3>

      <div class="row" v-show="accounts.length > 0">
        <div class="col-3">
          <b>Person Account Name</b>
        </div>
        <div class="col-3">
          <b>Account Number</b>
        </div>
        <div class="col-3">
          <b>Bank Name</b>
        </div>
        <div class="col-3">
          <b>IFSC Code</b>
        </div>
      </div>

      <div class="accountBox"  v-for="account in accounts">
        <div class="row">

          <div class="col-3">
            {{account.accName}}
          </div>
          <div class="col-3">
            {{account.accNumber}}
          </div>
          <div class="col-3">
            {{account.accBank}}
          </div>
          <div class="col-3">
            {{account.accIfsc}}
          </div>
        </div>

      </div>


      <form v-if="show" id="bank-form" @submit.prevent="submitBankAccount">
        <div class="form-row align-items-center">
          <div class="col">
            <input type="text" class="form-control mb-2" id="accName" name="accName" v-model="accName" placeholder="Full Name">
          </div>
          <div class="col">
            <input type="number" class="form-control mb-2" id="accNumber" name="accNumber" v-model="accNumber" placeholder="Account Number">
          </div>
          <div class="col">
            <input type="text" class="form-control mb-2" id="accBank" name="accBank" v-model="accBank" placeholder="Bank Name">
          </div>
          <div class="col">
            <input type="text" class="form-control mb-2" id="accIfsc" name="accIfsc" v-model="accIfsc" placeholder="IFSC">
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary mb-2 w-100">Submit</button>
          </div>
        </div>
      </form>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-2" @click="accountForm" v-if="!show">Create New Account</button>
          <button type="submit" class="btn btn-danger mb-2" @click="accountForm" v-else>Remove Account Form</button>
        </div>
      </div>
      <hr>
      <router-link tag="button" :to="{name: 'ProfileComplete', params: {'mid':$route.params.id}}" class="btn btn-success mb-2 ml-2 float-right">Go to Profile Completeness</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Bank',
  data(){
    return{
      accName:'',
      accBank:'',
      accIfsc:'',
      accNumber:'',
      accounts:'',
      photo:'',
      user_id: this.$route.params.id,
      show:false
    }
  },
  methods:{
    submitBankAccount(){
      this.$http.post(this.$http.$root+'/account', {
        accName: this.accName,
        accBank: this.accBank,
        accIfsc: this.accIfsc,
        accNumber: this.accNumber,
        user_id: this.user_id
      }).then(res => {
        this.resetForm();
        this.fetchAccounts();
      }).catch(err => {
        console.log(err);
      })
    },
    fetchAccounts(){
      console.log("Fetching...");
      this.$http.get(this.$http.$root+'/accounts/'+this.user_id).then(res=>{
        console.log(res.data)
        this.accounts = res.data.account;
        this.photo = this.$http.$root+'/uploads/'+res.data.photo
      }).catch(err => {
        console.log(err);
      })
    },
    accountForm(){
      this.show = !this.show;
    },
    resetForm(){
      this.accName= '';
      this.accBank= '';
      this.accIfsc= '';
      this.accNumber= '';
      this.show=!this.show;
    }
  },
  created(){
    this.fetchAccounts()
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
  .accountBox{
    background: #f9f9f9;
    padding: 10px 0;
    border: 1px solid #e8e8e8;
    margin-bottom: 13px;
  }
  .row .col-3:nth-child(1){
    padding-left: 25px;
  }
</style>
