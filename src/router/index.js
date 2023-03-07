import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import LandingHome from '@/views/LandingPage/LandingHome.vue'
import Home from '@/views/Home/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingHome',
      component: LandingHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
