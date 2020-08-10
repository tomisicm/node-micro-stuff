import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import qs from 'qs'

import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
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
    props: (route) => { query: route.fullPath } // eslint-disable-line
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  // TODO: ROUTER ISSUE?
  // OBJECTS ARE PARSED CORRECTLY
  // https://developer.aliyun.com/mirror/npm/package/clever-qs
  // https://npmdoc.github.io/node-npmdoc-qs/build/apidoc.html
  // @ts-ignore/
  // parseQuery: (query: string): object => { // @ts-ignore
  //   // debugger  // eslint-disable-line
  //   const queryObject = qs.parse(query, { delimiter: ',', arrayLimit: 0 }) // @ts-ignore
  //   console.log('parseQuery')
  //   console.log(queryObject)
  //   return queryObject
  // },
  // stringifyQuery(query: any): string {
  //   console.log('stringifyQuery')
  //   console.log(query)
  //   let result = qs.stringify(query, { arrayFormat: 'indices', delimiter: ',', encode: true })
  //   console.log(result)
  //   return result ? result : ''
  // }
  // parseQuery: qs.parse,
  // stringifyQuery: qs.stringify
})

export default router
