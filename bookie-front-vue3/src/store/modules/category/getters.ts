import State from './state'

const getters = {
  allCategories (state: State) {
    return state.allCategories 
  },
  selectedCategories (state: State) {
    return state.selectedCategories.length ? state.selectedCategories : []
  }
}

export default getters
