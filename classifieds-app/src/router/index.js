import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Auth from 'pages/Auth'

import Login from 'components/auth/Login'
import Register from 'components/auth/Register'

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
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
