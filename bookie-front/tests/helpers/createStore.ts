import Vuex from 'vuex'

const createStore = (VueInstamce, store: { state; mutations; actions; modules}) => {
  VueInstamce.use(Vuex)

  return new Vuex.Store({
    ...store
  })
}

export default createStore
