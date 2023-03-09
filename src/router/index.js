import { createRouter, createWebHashHistory } from 'vue-router'

const Login = () => import('@/views/Login/Login.vue')
const LandingHome = () => import('@/views/LandingHome/LandingHome.vue')
const Home = () => import('@/views/Home/Home.vue')

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
    },
    {
      path: '/practice',
      name: 'Practice',
      component: () => import('@/views/Practice/Practice.vue')
    }
  ]
})

export default router
