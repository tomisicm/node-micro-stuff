import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// ???
type State = {
  allCategories: Array<string>,
  selectedCategories: Array<string>
}

const state = (): State => ({
  allCategories: [
    'Science Fiction & Fantasy', 'Romance', 'Humor & Entertainment', 'Literature & Fiction', 'Engineering & Transportation', 'Cookbooks, Food & Wine', 'Crafts, Hobbies & Home'
  ],
  selectedCategories: []
})
  
export default {
  namespaced: true,
  state: state(),
  getters,
  actions,
  mutations
}
