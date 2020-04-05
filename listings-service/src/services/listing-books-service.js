import { sequelize } from "#root/models"

const { models: { ListingBooks } } = sequelize

export class ListingBooksService {
    static async destroy(params) {
        console.log('params')
        console.log(ListingBooks)
    }
}

