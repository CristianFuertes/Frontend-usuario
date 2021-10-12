import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/fibra',
    name: 'Fibra',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fibra.vue')
  },
  {
    path: '/cobre',
    name: 'Cobre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cobre.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Radio.vue')
  },
  {
    path: '/cctv',
    name: 'CCTV',
    component: () => import(/* webpackChunkName: "about" */ '../views/CCTV.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Productos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
