import { Category } from '@/types/category'

export interface State {
  allCategories: Array<Category>,
  selectedCategories: Array<Category>
}

const state = (): State => ({
  allCategories: [
    { id: '1', name: 'Science, Fiction and Fantasy' },
    { id: '3', name: 'Humor and Entertainment' },
    { id: '2', name: 'Romance' },
    { id: '4', name: 'Literature and Fiction' },
    { id: '5', name: 'Engineering and Transportation' },
    { id: '6', name: 'Cookbooks, Food and Wine' },
    { id: '7', name: 'Crafts, Hobbies and Home' }
  ],
  selectedCategories: []
})

export default state
