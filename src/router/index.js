import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Compare from '../views/Compare.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
