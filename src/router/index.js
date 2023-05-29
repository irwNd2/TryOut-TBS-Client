import { createRouter, createWebHashHistory } from 'vue-router'

const Login = () => import('@/views/Login/Login.vue')
const LandingHome = () => import('@/views/LandingPage/LandingHome.vue')
const Home = () => import('@/views/Home/Home.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingHome',
      component: LandingHome,
      meta: {
        requiresAuth: false
      }
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
      path: '/app',
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
          meta: {
            breadcrumb: [{ name: 'Home', path: '' }]
          }
        },
        {
          path: 'tryouts',
          name: 'TryOuts',
          component: () => import('@/views/TryOuts/List.vue'),
          meta: {
            breadcrumb: [
              {
                name: 'Home',
                path: ''
              },
              {
                name: 'TryOuts',
                path: '/app/tryouts'
              }
            ]
          }
        }
      ],
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
    next('/app')
  } else {
    next()
  }
})

export default router
