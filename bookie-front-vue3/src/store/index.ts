import { createStore } from 'vuex'
import loader from './modules/loader'
import category from './modules/category'
import query from './modules/query'


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
    category,
    query
  }
})

export default store

export function useStore() {
  return store
}
