<template>
  <div class="container">
    <div class="row">
    <form class="col-4 mx-auto bordered mt-5" @submit.prevent='login' >
      <h2>Login</h2>
      <div class="form-group mt-2">
        <label for="email">Email address</label>
        <input v-model="user.email" type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" 
          :class="{'is-invalid': errors.email}">
          <div class="invalid-feedback" >
            {{ errors.email }}
          </div>
      </div>
      <div class="form-group mt-2">
        <label for="password">Password</label>
        <input v-model="user.password" type="password" name="password" class="form-control" id="password">
      </div>
      <button type="submit" class="btn btn-primary mt-2">
        <span class="spinner-border" v-if="loading"></span> Submit</button>
    </form>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data(){
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      loading: false
    }
  },
  methods: {
    login: function(){
      this.loading = true;
      axios.post('http://localhost/api/login', this.user)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        this.$router.push({name: 'dashboard'});
      })
      .catch( error => {
        if (error.response) {
          this.loading =false;
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        }
      })
    }
  }
}
</script>

<style>

</style>