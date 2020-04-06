import { sequelize } from "#root/models"

const { models: { ListingBooks } } = sequelize

export class ListingBooksService {
    static async destroy(event) {
        try {
            return await ListingBooks.destroy({
                where: {
                    bookId: event.id
                }
            })
        } catch (e) {
            console.error(e)
        }
    }
}
