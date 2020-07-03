<template>
  <div id="app" :style='{backgroundImage: renderBackground}'>
    <router-view/>
    <Nav :screenWidth='screenWidth'/>
  </div>
</template>

<script>
import Nav from '@/components/misc/Nav'

export default {
  components: {
    Nav
  },
  created() {
    window.addEventListener('resize', this.checkScreenWidth)
  },
  destroyed() {
    window.removeEventListener('resize', this.checkScreenWidth)
  },
  data() {
    return {
      homeBackgroundImg: require('@/assets/home-background.png'),
      screenWidth: window.innerWidth
    }
  },
  methods: {
    checkScreenWidth(event) {
      this.screenWidth = event.target.innerWidth
    }
  },
  computed: {
    renderBackground() {
      const pathName = this.$route.name
      console.log(this.screenWidth)
      if (pathName === 'Home' && this.screenWidth > 1250) {
        return `linear-gradient(to bottom, var(--charcoal) 5%, rgba(48, 71, 94, .4), var(--charcoal) 92%), url(${this.homeBackgroundImg})`
      }

      return `linear-gradient(to bottom, var(--charcoal) 10vh, var(--blue), var(--charcoal))`
    }
  }
}
</script>

<style>

/*colors*/
:root {
--charcoal: #222831;
--blue: #30475E;
--pale-gold: #F2A365;
--grey: #ECECEC;
--pink: #54123B;

/*borders*/
--bdr-gold: solid 1px var(--pale-gold);
--bdr-radius-sm: .4rem;

/*spacing*/
--spc-xsm: .4rem;
--spc-sm: 1rem;
--spc-md: 1.75rem;
--spc-lg: 2.4rem;

/*fonts*/
--heading: 'Roboto', sans-serif;
--text: 'Kalam', cursive;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 1000px) {
  html {
    font-size: 80%;
  }
}

#app {
  height: 100vh;
  width: 100vw;
}

a, a:visited, .link, .link:visited {
  color: var(--grey);
  text-decoration: none;
  font-size: 1.5rem;
}

a:hover, .link:hover {
  color: var(--pink);
}

p {
  font-family: var(--text);
  color: var(--grey);
  margin-bottom: var(--spc-xsm);
  line-height: 135%;
  word-spacing: 3px;
  white-space: pre-line;
  font-size: 1.5rem;
}

main {
  width: 100%;
  height: 100%;
}

img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

button {
  outline: none;
  border: none;
  width: max-content;
  padding: var(--spc-xsm) var(--spc-sm);
  border-radius: var(--bdr-radius-sm);
  color: var(--charcoal);
  font-family: var(--heading);
  font-size: 1.2rem;
  font-weight: 300; 
}

button:hover {
  color: var(--grey);
  background-color: var(--pale-gold);
}

label {
  display: block;
  margin-bottom: var(--spc-xsm);
  color: var(--grey);
  font-family: var(--heading);
  font-size: 1.2rem;
  font-weight: 400;
  font-style: italic;
}

input, textarea {
  outline: none;
  background-color: transparent;
  border:none;
  border: solid 1px var(--grey);
  height: 2.5rem;
  width: 50%;
  padding-left: var(--spc-sm);
  color: var(--grey);
  font-family: var(--heading);
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: var(--bdr-radius-sm);
}

input:focus, textarea:focus {
  border: solid 2px var(--pale-gold);
  color: var(--pale-gold);
}

.default-h1 {
  padding: var(--spc-lg) 0;
  text-align: center;
  color: var(--pale-gold);
  font-family: var(--heading);
  font-weight: 300;
}

.default-h1 span {
  padding: var(--spc-xsm);
  border: var(--bdr-gold);
  border-radius: var(--bdr-radius-sm);
  width: 20rem;
  display: inline-block;
}

.router-link-exact-active{
  color: var(--pink) !important;
}

@media screen and (max-width: 650px) {
  .default-h1 span {
    width: 100%;
  }

  #app {
    min-height: 100vh;
    min-width: 100vw;
    height: auto;
    width: auto;
  }

  main {
    padding: 8vh var(--spc-md) var(--spc-md) var(--spc-md);
  }
}
</style>
