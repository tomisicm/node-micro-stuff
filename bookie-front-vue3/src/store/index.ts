import { createStore } from 'vuex'
import loader from './modules/loader'
import category from './modules/category'

// TODO: CREATE GLOBAL STATE
const store = createStore<any>({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loader,
    category
  }
})

export default store

export function useStore() {
  return store
}
