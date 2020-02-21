 
import Vue from 'vue'
import Vuex from 'vuex'
import { authStore } from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    authStore
  }
})

export default store