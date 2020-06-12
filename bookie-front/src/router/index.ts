import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  // },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/AppAuth.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "auth" */ '@/components/auth/AppLogin.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "auth" */ '@/components/auth/AppRegister.vue'),
        meta: {
          requiresAuth: false
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
