<template>
  <div class="account-form">
    <h1>{{ msg }}</h1>
    <form id="account-form" @submit.prevent="saveAccoutDetails">
      <div class="form-row">
        <div class="form-group col">
          <label for="name">Name</label>
          <input type="text" v-model="name" id="name" name="name" class="form-control" placeholder="Your Name" required="true">
        </div>

        <div class="form-group col">
          <label for="phone">Phone (Optional)</label>
          <input type="text" v-model="phone" maxlength="10" id="phone" name="phone" class="form-control" placeholder="Your 10 digit Phone">
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" value="a@h.com" v-model="email" id="email" name="email" class="form-control" placeholder="Your Email" required="true">
      </div>
      <div class="form-group">
        <label for="pan">Pan</label>
        <input type="text" v-model="pan" id="pan" npaname="pan" class="form-control" placeholder="Your 10 digit PAN" required="true">
      </div>
      <div class="form-group">
        <label for="pan">Company (Optional)</label>
        <input type="text" v-model="company" id="company" npaname="company" class="form-control" placeholder="Company Name">
      </div>
      <div class="alerts text-danger mb-3 text-left">
        {{alerts}}
      </div>

      <button type="submit" class="btn btn-success w-100">Save Account Details</button>
    </form>
    <br>
  </div>
</template>

<script>
export default {
  name: 'account-form',
  data () {
    return {
      msg: 'Welcome to account page',
      name: '',
      email:'',
      phone:'',
      pan:'',
      company:'',
      alerts:''
    }
  },
  methods:{
    saveAccoutDetails(){
      this.alerts = '';
      this.$http.post(this.$http.$root+'/users',{
        name: this.name,
        email: this.email,
        phone: this.phone,
        pan: this.pan,
        company: this.company,
      }).then(res=>{
        console.log(res.data._id);
        this.$router.push({name:'Uploads', params:{id:res.data._id}});
      }).catch(err => {
        console.log(err);
        this.alerts = err.response.data.message;
      });
    }
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
