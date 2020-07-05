import Vue from 'vue'
import Vuex from 'vuex'
import loader from './modules/loader'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loader
  }
})

export default store
export const createStore = (store: { state, mutations, actions, modules}) => {
  return new Vuex.Store({
    ...store
  })
}
