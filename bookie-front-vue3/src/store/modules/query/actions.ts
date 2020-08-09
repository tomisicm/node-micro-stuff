import { ActionTree } from 'vuex'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { State } from './state'

// TODO figure out better names
export type Actions<S = State> = {
  [ActionTypes.UPDATE_SELECTED_QUERY] (store: any, payload: any)  : void
  [ActionTypes.ADD_SINGLE_SELECTED_QUERY] (store: any, payload: any)  : void
  [ActionTypes.REMOVE_SINGLE_SELECTED_QUERY] (store: any, payload: any)  : void
}

const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.UPDATE_SELECTED_QUERY] (store, payload) {
    store.commit(MutationTypes.ADD_MULTIPLE_SELECTED_QUERIES, payload)
  },

  [ActionTypes.ADD_SINGLE_SELECTED_QUERY] (store, payload) {
    store.commit(MutationTypes.ADD_SELECTED_QUERY, payload)
  },

  [ActionTypes.REMOVE_SINGLE_SELECTED_QUERY] (store, payload) {
    store.commit(MutationTypes.REMOVE_SELECTED_QUERY, payload)
  }
}

export default actions
