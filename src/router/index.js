import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/NotCuratedMovies.vue'),
  },
  {
    path: '/liked-movies',
    name: 'liked-movies',
    component: () => import('@/views/LikedMovies.vue'),
  },
  {
    path: '/disliked-movies',
    name: 'disliked-movies',
    component: () => import('@/views/DislikedMovies.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
