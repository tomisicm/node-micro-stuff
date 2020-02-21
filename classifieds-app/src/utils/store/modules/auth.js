import authService from '@/services/http/auth-service'
import router from '@/router'
import getUserFromLocalStorage from '@/utils/localStorage'


function getInitialState () {
  return {
    user: getUserFromLocalStorage() || null
  }
}

const state = getInitialState()

const mutations = {
  SET_DATA (state, { user }) {
    state.user = user
  }
}

const actions = {
  async login ({ commit }, { email, password }) {
    await authService.login(email, password)
    commit('SET_DATA', getUserFromLocalStorage())
    router.push({ name: 'home' })
  },

  async register (_, { email, password, passwordConfirm }) {
    await authService.register(email, password, passwordConfirm)
    router.push({ name: 'signin', params: { userEmail: email } })
  },

  async logout ({ commit }) {
    authService.logout().then(() => {
      commit('SET_DATA', { user: null })
    })
  }
}

const getters = {
  user: state => state.user,
  isSignedIn: state => !!state.user || false,
  userId: state => getters.isSignedIn && state.user && state.user._id
}

export const authStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}