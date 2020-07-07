import Vuex from 'vuex'

export const createStore = (VueInstamce, store: { state, mutations, actions, modules}) => {
  VueInstamce.use(Vuex)

  return new Vuex.Store({
    ...store
  })
}
