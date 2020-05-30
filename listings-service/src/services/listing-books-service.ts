import { sequelize } from '#root/models'

const { models: { ListingBooks } } = sequelize

export class ListingBooksService {
	static async destroy(event: { id: string }): Promise<boolean> {
		try {
			return await ListingBooks.destroy({
				where: {
					bookId: event.id
				}
			})
		} catch (e) {
			console.error(e)
			return false
		}
	}
}
