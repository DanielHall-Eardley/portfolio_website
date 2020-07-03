<template>
  <div>
    <nav v-if='screenWidth > 600' class='menu-desktop'>
      <router-link :to='{name: "Home"}'>Home</router-link>
      <router-link :to='{name: "About"}'>About</router-link>
      <router-link :to='{name: "Portfolio"}'>Portfolio</router-link>
      <router-link :to='{name: "Recommendation"}'>Recommendations</router-link>
      <!-- <router-link :to='{name: "Blog"}'>Blog</router-link> -->
      <router-link :to='{name: "Contact"}'>Contact</router-link>
      <a href="https://daniel-hall-eardley-online-cv.web.app/">Resume</a>
      <router-link :to='checkAdminLogin()'>Admin</router-link>
    </nav>
    <div v-else class='menu-container' :class='{overlay: showMenu}'>
      <div class="menu-toggle" v-show='!showMenu' @click='showMenu = true'>
        <span>Menu</span>
        <svg>
          <use href='@/assets/sprite.svg#icon-chevron-thin-down'></use>
        </svg>
      </div>
      <nav v-show='showMenu' class='menu-mobile'>
        <span class='link' @click="navigate('Home')">Home</span>
        <span class='link' @click='navigate("About")'> About</span>
        <span class='link' @click="navigate('Portfolio')">Portfolio</span>
        <span class='link' @click="navigate('Recommendation')">Recommendations</span>
        <!-- <span @click="navigate('Home')">Blog</span> -->
        <span class='link' @click="navigate('Contact')">Contact</span>
        <a href="https://daniel-hall-eardley-online-cv.web.app/">Resume</a>
        <span class='link' @click="navigate('Admin')">Admin</span>
      </nav>
      <div class="menu-toggle" v-show='showMenu' @click='showMenu = false'>
        <span>Menu</span>
        <svg>
          <use href='@/assets/sprite.svg#icon-chevron-thin-up'></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {format} from 'date-fns'

export default {
  data() {
    return {
      showMenu: false
    }
  },
  props: ['screenWidth'],
  methods: {
    checkAdminLogin() {
      const tokenExpiration = localStorage.getItem('expiresIn')
      const now = format(new Date(), 'T') 
    
      if (now > tokenExpiration) {
        localStorage.clear()
        return {
          name: 'Login'
        }
      }

      return {
        name: 'Admin'
      }
    },
    navigate(destination) {
      this.showMenu = false
      if (this.$route.name === destination) {
        return
      }

      this.$router.push({name: destination})
    }
  }
}
</script>

<style scoped>
  .menu-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--spc-md);
    background-color: var(--charcoal);
  }

  .overlay {
    bottom: 0;
  }

  .menu-toggle {
    color: var(--pale-gold);
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    border: var(--bdr-gold);
    padding: var(--spc-xsm);
    border-radius: var(--bdr-radius-sm);
  }

  .menu-toggle svg {
    fill: var(--pale-gold);
    height: 2rem;
    width: 2rem;
  }

  .menu-mobile span, .menu-mobile a {
    display: block; 
    margin-bottom: var(--spc-sm);
  }

  .menu-desktop {
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    font-family: var(--text);
  }

  nav a:not(:last-child) {
    margin-right: var(--spc-md);
  }
</style>