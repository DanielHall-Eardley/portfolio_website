<template>
  <main class="admin">
    <h1 class="default-h1"><span>Admin</span></h1>
    <section class="messages">
      <button class='toggle-button' @click='showMessages = !showMessages'>
        {{showMessages ? 'Hide' : 'Show'}} Messages
      </button>
      <ul v-if='showMessages'>
        <li class='message-item' v-for='msg in messageArray' :key='msg._id'>
          <h3>
            <span>{{msg.name}}</span>
            <span>{{formatDate(msg.createdAt)}}</span>
          </h3>
          <p>{{msg.message}}</p>
          <div>{{msg.email}}</div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import {apiHost} from '../global'
import {format} from 'date-fns'

export default {
  data() {
    return {
      messageArray: [],
      showMessages: false
    }
  },
  async created() {
    const token = localStorage.getItem('token')
    const tokenExpiration = localStorage.getItem('expiresIn')
    const now = format(new Date(), 'T') 
    console.log(now, tokenExpiration)
    if (now > tokenExpiration) {
      localStorage.clear()
      return this.$router.push({name: 'Login'})
    }

    const res = await fetch(apiHost + '/api/message/list', {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })

    const response = await res.json()

    if (response.error) {
      return alert(response.error)
    }

    this.messageArray = response.messages
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "d LLL Y h a")
    }
  }
}
</script>

<style scoped>
  .messages {
    margin: 0 var(--spc-md);
    border: var(--bdr-gold);
    border-radius: var(--bdr-radius-sm);
    max-height: 66%;
  }
  
  .messages ul {
    list-style: none;
  }
  .toggle-button {
    width: 100%;
  }

  .message-item {
    margin: var(--spc-sm);
    
    border: var(--bdr-gold);
    border-radius: var(--bdr-radius-sm);
  }

  .message-item h3 {
    background-color: var(--pale-gold);
    color: var(--grey);
    padding: var(--spc-xsm) var(--spc-sm);
    display: flex;
    justify-content: space-between;
    font-family: var(--heading);
    font-size: 1.4rem;
  }

  .message-item p {
    margin: var(--spc-sm);
  }

  .message-item div {
    font-family: var(--heading);
    font-size: 1.3rem;
    color: var(--pale-gold);
    text-align: right;
    margin-bottom: var(--spc-sm);
    margin-right: var(--spc-sm);
  }

  @media screen and (max-width: 650px) {
    .messages {
      margin: 0;
    }
  }
</style>