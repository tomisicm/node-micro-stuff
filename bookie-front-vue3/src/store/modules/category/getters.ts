const getters = {
  allCategories (state) {
    return state.allCategories 
  },
  selectedCategories (state) {
    return state.selectedCategories.length ? state.selectedCategories : []
  }
}

export default getters
