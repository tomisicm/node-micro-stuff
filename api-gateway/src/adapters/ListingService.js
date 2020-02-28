import got from "got";

const LISTING_SERVICE_URI = "http://listings-service:7100";

export default class ListingService {
	static async fetchAllListings() {
		const data = await got.get(`${LISTING_SERVICE_URI}/listings`).json();
		return data;
	}

	static async fetchListingById(id) {
		const data = await got.get(`${LISTING_SERVICE_URI}/listings/${id}`).json();
		return data;
	}

	static async createListing(body) {
		const data = await got
			.post(`${LISTING_SERVICE_URI}/listings`, {
				json: body,
				responseType: "json"
			})
			.json();
		return data;
	}

	static async updateListing(listing) {
		const { id, title, description } = listing;
		const data = await got
			.put(`${LISTING_SERVICE_URI}/listings/${id}`, {
				json: {
					...listing
				},
				responseType: "json"
			})
			.json();
		return data;
	}

	static async deleteListing(id) {
		const data = await got
			.delete(`${LISTING_SERVICE_URI}/listings/${id}`)
			.json();
		return data;
	}
}
