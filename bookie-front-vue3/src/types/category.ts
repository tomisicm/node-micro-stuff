interface Category { 
  id: string,
  name: string
}

interface SelectedCategory extends Category {
  selected?: boolean
}

export { Category, SelectedCategory }
