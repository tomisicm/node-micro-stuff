import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'
import { Category } from '@/types/category'


export type Mutations<S = State> = {
  [MutationTypes.RESET_SELECTED_CATEGORIES] (state: S, payload: boolean): void,
  [MutationTypes.REMOVE_SELECTED_CATEGORY] (state: S, payload: Category): Array<Category>,
  [MutationTypes.ADD_SELECTED_CATEGORY] (state: S, payload: Category): Array<Category>,
  [MutationTypes.ADD_MULTIPLE_SELECTED_CATEGORIES] (state: S, payload: Array<Category>): Array<Category>,
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.RESET_SELECTED_CATEGORIES] (state, payload) {
    
  },

  [MutationTypes.REMOVE_SELECTED_CATEGORY] (state, payload) {
    return []
  },

  [MutationTypes.ADD_SELECTED_CATEGORY] (state, payload) {
    return []
  },

  [MutationTypes.ADD_MULTIPLE_SELECTED_CATEGORIES] (state, payload) {
    return []
  }
}

export default mutations
