export interface State {
  selectedCategories: string[]
}

const state = (): State => ({
  selectedCategories: []
})

export default state
