import { Category } from '@/types/category'

export interface State {
  allCategories: Array<Category>,
  selectedCategories: Array<Category>
}

const state = (): State => ({
  allCategories: [
    { id: '1', name: 'Science Fiction & Fantasy' },
    { id: '2', name: 'Romance' }, 
    { id: '3', name: 'Humor & Entertainment' }, 
    { id: '4', name: 'Literature & Fiction' },
    { id: '5', name: 'Engineering & Transportation' },
    { id: '6', name: 'Cookbooks, Food & Wine' },
    { id: '7', name: 'Crafts, Hobbies & Home' }
  ],
  selectedCategories: []
})

export default state
