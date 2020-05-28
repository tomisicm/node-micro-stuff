import { sequelize } from '#root/models'
import { Op } from 'sequelize'

import PopularBooks from './popular-books'

const { models: { Book } } = sequelize

export default class SearchBooksService {

    // try finding the good match
    static async getBooks (data) {
        const { keyword, categoryId, userMetaData } = data

        // console.log(keyword)
        // const books = await Book.find({
        //     where: {
        //         title: keyword
        //     }
        // })

        // const authorBooks = await PopularBooks.byAuthor({ author: 'Peony Press' })
        const categoryBooks = await PopularBooks.byCategory({ categoryId: '4' })


        return categoryBooks
    }
}
