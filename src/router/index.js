import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shopping',
    name: 'Shopping',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shopping" */ '../views/Shopping.vue')
  },
  {
    path: '/vue/img/token',
    name: 'imgToken',
    component: () => import('../views/vue2Img.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/post.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/btn',
    name: 'btn',
    component: () => import('../views/button.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/editor.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('../views/editorShow.vue')
  },
  {
    path: '/rule',
    name: 'rule',
    component: () => import('../views/editorTest.vue')
  },
  {
    path: '/newEditor',
    name: 'newEditor',
    component: () => import('../views/editor/index.vue')
  },
  {
    path: '/tailoring',
    name: 'tailoring',
    component: () => import('../views/tailoring.vue')
  },
  {
    path: '/ceshi',
    name: 'ceshi',
    component: () => import('../views/ceshi1.vue')
  },
  {
    path: '/ceshi2',
    name: 'ceshi2',
    component: () => import('../views/ceshi2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
