import { sequelize } from '#root/models'
import RatingsService from '#root/services/ratings-service'
import CategoriesService from '#root/services/ratings-service'

const { models } = sequelize
const { models: { Category, CategoryMetadata, Rating } } = sequelize


// TODO
export default class RatingsDataService {
  static async getRatingMatrixData() {
    // TODOS
    // console.log(RatingsService)
    // const bookCategories = await Category
    //   .findAll({ attributes: ['id'], raw: true })

    // const categoryId = 

    // console.log(bookCategories)
  }
}