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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
