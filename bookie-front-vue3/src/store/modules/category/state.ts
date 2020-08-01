export interface State {
  allCategories: Array<Category>,
  selectedCategories: Array<Category>
}

export interface Category {
  id?: String,
  name: String,
}

const state = (): State => ({
  allCategories: [
    { name: 'Science Fiction & Fantasy' },
    { name: 'Romance' }, 
    { name: 'Humor & Entertainment' }, 
    { name: 'Literature & Fiction' },
    { name: 'Engineering & Transportation' },
    { name: 'Cookbooks, Food & Wine' },
    { name: 'Crafts, Hobbies & Home' }
  ],
  selectedCategories: []
})

export default state
