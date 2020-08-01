import { State, Category } from './state'

const getters = {
  allCategories (state: State): Array<Category> {
    return state.allCategories 
  },
  selectedCategories (state: State): Array<Category> {
    return state.selectedCategories.length ? state.selectedCategories : []
  }
}

export default getters
