import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'

import { Category } from '@/types/category'

export type Mutations<S = State> = {
  [MutationTypes.RESET_SELECTED_QUERIES] (state: S, payload: boolean): void,
  [MutationTypes.REMOVE_SELECTED_QUERY] (state: S, payload: any): void,
  [MutationTypes.ADD_SELECTED_QUERY] (state: S, payload: any): void,
  [MutationTypes.ADD_MULTIPLE_SELECTED_QUERIES] (state: S, payload: any): void,
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.RESET_SELECTED_QUERIES] (state, payload) {
    state.selectedCategories.length = 0
  },

  [MutationTypes.REMOVE_SELECTED_QUERY] (state, payload: Category) {
    const idx = state.selectedCategories
    .findIndex((selectedCategory: string) => selectedCategory == payload.name)
    
    const newData = [
      ...state.selectedCategories.slice(0, idx),
      ...state.selectedCategories.slice(idx + 1)
    ]
    state.selectedCategories = newData
  },

  [MutationTypes.ADD_SELECTED_QUERY] (state, payload) {
    // console.log(state.selectedCategories)
    state.selectedCategories.push(payload.name)
  },

  [MutationTypes.ADD_MULTIPLE_SELECTED_QUERIES] (state, payload) {
    if (Array.isArray(payload.categories)) {
      state.selectedCategories = [...payload.categories]
    } else {
      state.selectedCategories = [payload.categories]
    }
  }
}

export default mutations
