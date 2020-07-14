<template>
  <main class="portfolio">
    <h1 class='default-h1'><span>Portfolio</span></h1>
    <div class="flex-container">
      <svg class='icon-left' @click='changePortfolioSelection("dec", portfolioArray.length)'>
        <use href='@/assets/sprite.svg#icon-triangle-left'></use>
      </svg>
      <section class='container'>
        <h2 class='heading'>
          <span>{{portfolioArray[selectedPortfolio].name}}</span>
          <a :href='portfolioArray[selectedPortfolio].appLink'>Application</a>
          <a 
            v-if='portfolioArray[selectedPortfolio].githubLink' 
            :href='portfolioArray[selectedPortfolio].githubLink'>
            Github
          </a>
        </h2>
        <h3>Summary</h3>
        <p>{{portfolioArray[selectedPortfolio].summary}}</p>
        <h3>Key Features</h3>
        <ul class='feature-list'>
          <li v-for='feature in portfolioArray[selectedPortfolio].features' :key='feature'>
            {{feature}}
          </li>
        </ul>
        <h3>Tech</h3>
        <ul class='tech-list'>
          <li v-for='tech in portfolioArray[selectedPortfolio].techArray' :key='tech'>
            {{tech}}
          </li>
        </ul>
        <div class='img-container'>
          <a :href='portfolioArray[selectedPortfolio].appLink'>
            <img :src="portfolioArray[selectedPortfolio].imgUrl" alt="">
          </a>
        </div>
      </section>
      <svg class='icon-right' @click='changePortfolioSelection("inc", portfolioArray.length)'>
        <use href='@/assets/sprite.svg#icon-triangle-right'></use>
      </svg>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      portfolioArray: [
        {
          name: 'Ecommerce Demo Website',
          appLink: 'https://pure-wave-82661.herokuapp.com/',
          githubLink: 'https://github.com/DanielHall-Eardley/ecommerce_template_application',
          summary: 'This is a ecommerce website built as demonstration to attract potential clients and to be used as a template base for any subsequent ecommerce website I may build.',
          imgUrl: require('@/assets/ecommerce-website.png'),
          features: [
            'Custom checkout system built using Stripe and EasyPost API',
            'Customers can search for products, add products to an order, purchase an order and view current and past orders',
            'Businesses can add, update and delete products', 
            'Businesses can print postage labels for products and fulfill orders',
            'Photo upload via S3'
          ],
          techArray: ['React', 'Redux', 'Node', 'Express', 'MongoDB', 'Mongoose', 'CSS Grid', 'Flexbox']
        },
        {
          name: 'ShowHook',
          appLink: 'https://greve-chocolatine-96579.herokuapp.com/',
          githubLink: 'https://github.com/DanielHall-Eardley/ShowHook',
          summary: 'This is a market place application I am building for a client. The purpose of ShowHook is to connect venues, musicians and attendees. Venues and musician can interact with each other to book performances, attendees can search for shows to attend and purchase tickets',
          imgUrl: require('@/assets/showhook.png'),
          features: [
            'Act and venue profile creation',
            'Performance booking system with integrated messaging (using Socket.io)',
            'User based search system with filters, users only get search results relevent to them',
            'Address verification and display with Google maps'
          ],
          techArray: ['Vue.js', 'Node', 'Express', 'MongoDB', 'Mongoose', 'CSS Grid', 'Flexbox']
        },
         {
          name: 'Litt',
          appLink: 'https://play.google.com/store/apps/details?id=app.getlitt.litt&hl=en',
          githubLink: null,
          summary: 'An event based social media platform that I worked on while contracting at Litt.',
          imgUrl: require('@/assets/litt.png'),
          features: [
            'Event/plan creation',
            'Search for events and register to attend',
            'Recieve notifications about events',
            'Profile creation'
          ],
          techArray: ['Python', 'Django', 'Postgresql', 'React Native', 'Redux', 'Vanilla JS']
        }
      ],
      selectedPortfolio: 0
    }
  },
  methods: {
    changePortfolioSelection(direction, end) {
      if (direction === 'inc') {
        if (this.selectedPortfolio === end - 1) {
          return
        }

        const newIndex = this.selectedPortfolio + 1
        this.selectedPortfolio = newIndex
      }

      if (direction === 'dec') {
        if (this.selectedPortfolio === 0) {
          return
        }

        const newIndex = this.selectedPortfolio - 1
        this.selectedPortfolio = newIndex
      }
    }
  }
}
</script>

<style scoped>
  .flex-container {
    height: 70%;
    display: flex;
    align-items: center;
  }

  .container {
    width: 85%;
    border: var(--bdr-gold);
    border-radius: var(--bdr-radius-sm);
    height: 100%;
    overflow-y: auto;
  }

  .container h3 {
    margin: var(--spc-sm);
    font-size: 1.6rem;
    color: var(--pale-gold);
    font-family: var(--heading);
    font-weight: 300;
    font-style: italic;
  }

  .icon-right, .icon-left {
    width: 4.5rem;
    height: 4.5rem;
    fill: var(--pale-gold);
  }

  .icon-right:hover, .icon-left:hover {
    fill: var(--pink);
  }

  .icon-left {
    margin-left: auto;
    margin-right: var(--spc-sm);
  }

  .icon-right {
    margin-right: auto;
    margin-left: var(--spc-sm);
  }

  .heading {
    background-color: var(--pale-gold);
    padding: var(--spc-sm);
    display: flex;
    align-items: center;
    font-family: var(--heading);
  }

  .heading span {
    color: var(--charcoal);
    margin-right: auto;
    font-size: 1.8rem;
    font-weight: 300;
  }

  .heading a {
    color: var(--charcoal);
    margin-left: var(--spc-sm);
    font-size: 1.3rem;
    font-family: var(--heading);
    font-weight: 400;
  }

  .heading a:hover {
    color: var(--pink);
  }

  .container p {
    margin: 0 var(--spc-lg);
  }

  .feature-list {
    color: var(--grey);
    font-size: 1.5rem;
    margin: 0 var(--spc-lg) 0 3.5rem;
    font-family: var(--text);
  }

  .tech-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: var(--spc-xsm);
    list-style: none;
    font-size: 1.5rem;
    font-family: var(--heading);
    font-weight: 300;
    color: var(--charcoal);
    padding: 0 var(--spc-md);
  }

  .tech-list li {
    padding: var(--spc-xsm) 0;
    background-color: var(--grey);
    text-align: center;
    border-radius: var(--bdr-radius-sm);
  }

  .img-container {
    padding: var(--spc-md);
    height: 100%;
  }

  @media screen and (max-width: 650px) {
    .default-h1 {
      padding-bottom: 0;
    }

    .flex-container {
      height: auto;
      display: grid;
      grid-template-rows: min-content auto;
      grid-template-columns: 1fr 1fr;
      padding-bottom: var(--spc-md);
    }

    .container {
      width: 100%;
      grid-column: 1 / 3;
      overflow: hidden;
    }

    .icon-left, .icon-right {
      grid-row: 1 / 2;
      margin: 0;
    }

    .icon-left {
      justify-self: end;
    }

    .img-container {
      height: auto;
    }
  }
</style>