import { GetterTree } from 'vuex'
import { State } from './state'
import { Category } from '@/types/category'

export type Getters = {
  allCategories(state: State): Array<Category>
  selectedCategories(state: State): Array<Category>
}

const getters: GetterTree<State, State> & Getters = {
  allCategories (state: State) {
    return state.allCategories 
  },

  selectedCategories (state: State) {
    return state.selectedCategories.length ? state.selectedCategories : []
  }
}

export default getters
