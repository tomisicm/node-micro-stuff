import { Category } from '@/types/category'

class CategoryService {
  endpoint = 'http://127.0.0.1:7000/graphql'

  // TODO
  async fetchAllCategories () {
    const data: Array<Category> = []
    
    await console.log('coc')
    return data
  }
}

export default CategoryService
