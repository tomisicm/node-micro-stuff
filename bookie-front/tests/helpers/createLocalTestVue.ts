import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import VueRouter from 'vue-router'
import { createStore } from '@/store'
import { createRouter } from '@/router'

type StoreArgs = { state, mutations, actions, modules}

const createLocalTestVue = (initStore: StoreArgs) => {
  const localVue = createLocalVue()

  localVue.use(VueRouter)
  localVue.use(Vuex)

  const store = createStore(initStore)
  const router = createRouter()

  return { localVue, store, router }
}

export default createLocalTestVue
