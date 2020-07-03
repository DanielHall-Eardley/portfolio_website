<template>
  <main class="login">
    <h1 class="default-h1"><span>Login</span></h1>
    <form class='container' v-on:submit.prevent='login'>
      <label for="">Name</label>
      <input type="text" v-model='name'>
      <label for="">Password</label>
      <input type="password" v-model='password'>
      <button>Login</button>
    </form>
  </main>
</template>

<script>
import {apiHost} from '../global'

export default {
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    async login() {
       const res = await fetch(apiHost + '/api/login', {
        body: JSON.stringify({
          name: this.name,
          password: this.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      })
      const response = await res.json()

      if (response.error) {
        return alert(response.error)
      }
   
      localStorage.setItem('token', response.token)
      localStorage.setItem('expiresIn', response.expiresIn)
      this.$router.push({name: 'Admin'})
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    border: var(--bdr-gold);
    border-radius: var(--bdr-radius-sm);
    width: 30rem;
    padding: var(--spc-md);
  }

  .container input {
    width: 100%;
    margin-bottom: var(--spc-sm);
  }

  @media screen and (max-width: 650px) {
    .container {
      width: auto;
    }
  }
</style>