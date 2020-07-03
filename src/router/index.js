import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Recommendation from '../views/Recommendation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      position: 1
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      position: 2
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      position: 3
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      position: 4
    }
  },
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: Recommendation,
    meta: {
      position: 5
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      position: 6
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      position: 7
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      position: 7
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
