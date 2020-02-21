import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Auth from 'pages/Auth'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('components/auth/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('components/auth/Register')
      }
    ]
  }
]

// console.log(Login)

export default new Router({
  mode: 'history',
  routes: routes
})
