import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  selectedCategories(state: State): string[],
}

const getters: GetterTree<State, State> & Getters = {
  selectedCategories (state: State) {
    return state.selectedCategories && state.selectedCategories.length ? state.selectedCategories : []
  }
}

export default getters
