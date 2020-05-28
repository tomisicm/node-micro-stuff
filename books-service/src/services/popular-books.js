import { sequelize } from '#root/models'
import { Op } from 'sequelize'

const { models: { Book } } = sequelize

export default class PopularBooksService {

    static async byAuthor (data) {
        const { author } = data

        const books = await Book.findAll({
            where: {
                author: author
            }
        })

        return books
    }

    static async byCategory (data) {
        const { categoryId } = data

        const books = await Book.findAll({
            where: {
                categoryId: categoryId
            }
        })

        return books
    }
}
