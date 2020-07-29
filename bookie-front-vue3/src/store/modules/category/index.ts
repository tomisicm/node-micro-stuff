import mutations from './mutations'
import actions from './actions'
import getters from './getters'


const state = () => ({
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
