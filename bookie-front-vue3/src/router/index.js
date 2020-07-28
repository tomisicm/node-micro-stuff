import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
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
        component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/AppLogin.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/AppRegister.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'my-account',
        name: 'my-account',
        component: () => import(/* webpackChunkName: "auth" */ '@/views/MyAccount.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ]
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "books" */ '@/views/Books.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
