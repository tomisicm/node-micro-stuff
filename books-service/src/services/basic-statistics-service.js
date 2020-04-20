import { sequelize } from '#root/models'

const { models } = sequelize


// TODO
export default class RatingsService {
  static async getModelAverage(dbModel, query) {
    console.log(models[dbModel])
  }
}