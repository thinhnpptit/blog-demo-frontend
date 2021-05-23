<template>
  <div class="container">
    <div class="row">
      <h2>Dashboard</h2>
      <p>Welcome</p>
      <form class="col-8 mx-auto bordered mt-5" @submit.prevent='createPost' >
      <div class="form-group mt-2">
        <label for="title">Title</label>
        <input v-model="post.title" type="title" name="title" class="form-control" id="title" aria-describedby="titleHelp" />
      </div>
      <div class="form-group mt-2">
        <label for="content">Content</label>
        <textarea rows="15" v-model="post.content" type="content" name="content" class="form-control" id="content"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-2">
        <span class="spinner-border" v-if="loading"></span> Submit</button>
    </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import BaseRequest from '../core/BaseRequest'

export default {
  data(){
    return {
      post: {
        title: '',
        content: ''
      },
      errors: {},
      loading: false
    }
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    checkLoggedIn: function() {
      BaseRequest.get('/user')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.$router.push ({ name: 'login'});
      })
    },
    createPost: function() {
      this.loading = true;

      BaseRequest.post('/post', this.post)
      .then( () => {
        alert('Up post successfully');
        this.loading = false;
        this.post = { title:'' , content: ''}
      })
      .catch( error => {
        this.loading = false;
        this.errors = error.response.data.errors;
      })
    }
  }
}
</script>