import got from "got";
import ResourceNotFoundError from "#root/errors/ResourceNotFoundError";

const BOOKS_SERVICE_URI = "http://books-service:7102";

export default class BookService {
	// static async fetchAllBooks() {
	// 	try {
	// 		const data = await got.get(`${BOOKS_SERVICE_URI}/books/all`).json();
	// 		return data;
	// 	} catch (e) {
	// 		throw e
	// 	}
    // }
    
    static async fetchAllBooksForListing(bookIds) {
		try {
            const data = await got
				.post(`${BOOKS_SERVICE_URI}/books`, {
					json: {
						ids: bookIds
					},
					responseType: "json"
				})
				.json();

			return data;

		} catch (e) {
			throw e
		}
	}

	// static async fetchBooksById(id) {
	// 	try {
	// 		const data = await got.get(`${BOOKS_SERVICE_URI}/listings/${id}`).json();
	// 		if (data) {
	// 			return data;
	// 		}
	// 		throw new ResourceNotFoundError(id, "listing");
	// 	} catch (e) {
	// 		throw e
	// 	}
	// }

	// static async createBook(body) {
	// 	try {
	// 		const data = await got
	// 			.post(`${BOOKS_SERVICE_URI}/book`, {
	// 				json: body,
	// 				responseType: "json"
	// 			})
	// 			.json();
	// 		return data;
	// 	} catch (e) {
	// 		throw e
	// 	}
	// }

	// static async updateBook(book) {
	// 	const { id } = book;
	// 	try {
	// 		const data = await got
	// 			.put(`${BOOKS_SERVICE_URI}/book/${id}`, {
	// 				json: {
	// 					...listing
	// 				},
	// 				responseType: "json"
	// 			})
	// 			.json();
	// 		if (data.id) {
	// 			return data;
	// 		}
	// 		throw new ResourceNotFoundError(id, "listing");
	// 	} catch (e) {
	// 		throw e;
	// 	}
		
	// }

	// static async deleteBook(id) {
	// 	try {
	// 		const data = await got
	// 			.delete(`${BOOKS_SERVICE_URI}/book/${id}`)
	// 			.json();
	// 		return data;
	// 	} catch (e) {
	// 		throw new ResourceNotFoundError(id, "listing");
	// 	}
	// }
}
