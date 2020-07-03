<template>
  <main class="contact">
    <h1 class="default-h1"><span>Contact</span></h1>
    <form class="container" v-on:submit.prevent='submitMessage'>
      <h2>Leave me a message</h2>
      <div>
        <label for="">Your Name</label>
        <input type="text" v-model='name'>
      </div>
      <div>
        <label for="">Your Email</label>
        <input type="text" v-model='email'>
      </div>
      <div>
        <label for="">Your Message</label>
        <textarea v-model='message'></textarea>
      </div>
      <button>Send</button>
      <p>Email: 350chevy8@gmail.com</p>
    </form>
  </main>
</template>

<script>
import {apiHost} from '../global'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  }, 
  methods: {
    async submitMessage() {
      const res = await fetch(apiHost + '/api/message/create', {
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
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

      alert(response.alert)
      this.$router.go()
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 12vw;
    border: var(--bdr-gold);
    border-radius: var(--bdr-radius-sm);
    padding: var(--spc-md);
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    gap: var(--spc-sm);
    max-height: 70%;
  }

  .container h2 {
    color: var(--pale-gold);
    font-family: var(--heading);
    font-size: 1.8rem;
    font-weight: 300;
    grid-column: 1 / -1;
  }

  .container div:last-of-type {
    width: 100%;
    height: 13rem;
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
  }

  .container div input {
    width: 100%;
  }

  .container div textarea {
    width: 100%;
    flex: 1;
    align-self: stretch;
    border-radius: var(--bdr-radius-sm);
    padding: var(--spc-sm);
  }

  .container p {
    font-family: var(--header);
    margin: 0;
    justify-self: end;
    align-self: end;
    font-size: 1.4rem;
    font-weight: 400;
  }

  @media screen and (max-width: 650px) {
    .container {
      margin: 0;
      height: 100%;
    }

    .container div, .container button, .container p {
      grid-column: 1 / 3;
    }

    .container p {
      justify-self: start;
    }
  }
</style>