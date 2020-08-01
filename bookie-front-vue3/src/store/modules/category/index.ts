import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'
  
export default {
  namespaced: true,
  state: state,
  getters,
  actions,
  mutations
}
