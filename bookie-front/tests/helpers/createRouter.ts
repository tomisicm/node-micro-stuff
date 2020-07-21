import VueRouter from 'vue-router'

const createRouter = (VueInstamce) => {
  VueInstamce.use(VueRouter)

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: []
  })

  return router
}

export default createRouter
