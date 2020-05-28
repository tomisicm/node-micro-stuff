import { sequelize } from '#root/models'
import { Op } from 'sequelize'

const { models: { Book } } = sequelize

export default class RecommendationBooksService {

    // try finding the good match
    static async searchByString (data) {

        const search = data.keyword

        const book = Book.find({
            where: {
                title: search
            }
        })

        return book
    }
}
