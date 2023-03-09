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
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/practice',
      name: 'Practice',
      component: () => import('@/views/Practice/Practice.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else if (to.path === '/login' && localStorage.getItem('token')) {
    next('/home')
  } else {
    next()
  }
})

export default router
