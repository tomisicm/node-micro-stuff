import { ActionTree } from 'vuex'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { State } from './state'
import CategoryService from '@/services/CategoryService'

export type Actions<S = State> = {
  [ActionTypes.FETCH_ALL_CATEGORIES ] (store: any): void,
  [ActionTypes.UPDATE_SELECTED_CATEGORIES] (store: any, payload: any) :void
}

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.FETCH_ALL_CATEGORIES ] ({ commit }) {
    const allCategories = await CategoryService.fetchAllCategories()

    commit(MutationTypes.SET_ALL_CATEGORIES, allCategories)
  },

  [ActionTypes.UPDATE_SELECTED_CATEGORIES] (store, payload) {
    console.log(store)
    store.state.selectedCategories = payload
    console.log(payload)
  }
}

export default actions
