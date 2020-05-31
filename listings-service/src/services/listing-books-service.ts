import { ListingBooks } from '#root/models/ListingBooks'

// const { models: { ListingBooks } } = sequelize

export class ListingBooksService {
	static async destroy(event: { id: string }): Promise<boolean> {
		try {
			const isDestroyed = await ListingBooks.destroy({
				where: {
					bookId: event.id
				}
			})

			return isDestroyed > 0
		} catch (e) {
			console.error(e)
			return false
		}
	}
}
