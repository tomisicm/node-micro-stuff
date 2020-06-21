import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/AppAuth.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth" */ '@/components/auth/AppLogin.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "auth" */ '@/components/auth/AppRegister.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'my-account',
        name: 'my-account',
        component: () => import(/* webpackChunkName: "auth" */ '@/views/MyAccount.vue')
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
