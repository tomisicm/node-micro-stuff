import VueRouter from 'vue-router'

export const createStore = (VueInstamce) => {
  VueInstamce.use(VueRouter)

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: []
  })

  return router
}
