import { Category } from '@/types/category'

interface CategoryServiceInterface {
  fetchAllCategories(): Promise<Array<Category>>
}
class CategoryService implements CategoryServiceInterface {
  endpoint = 'http://127.0.0.1:7000/graphql'

  // TODO
  async fetchAllCategories () {
    const data: Array<Category> = []
    try { 
      await console.log('coc')
    } catch (e) {
      
    }
    return data
  }
}

export default CategoryService
