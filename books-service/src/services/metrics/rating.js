import { sequelize } from '#root/models'
import { Op } from 'sequelize'

const { models: { Rating } } = sequelize

export default class RatingBooksService {

    static async getNMostRated (data) {
        const { author } = data

        

        return books
    }

    static async byCategory (data) {
        const { categoryId } = data

        

        return books
    }
}
