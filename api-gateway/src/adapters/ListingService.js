import got from "got";
import ResourceNotFoundError from "#root/errors/ResourceNotFoundError";

const LISTING_SERVICE_URI = "http://listings-service:7100";

export default class ListingService {
	static async fetchAllListings() {
		try {
			const data = await got.get(`${LISTING_SERVICE_URI}/listings`).json();
			return data;
		} catch (e) {
			throw e
		}
	}

	static async fetchListingById(id) {
		try {
			const data = await got.get(`${LISTING_SERVICE_URI}/listings/${id}`).json();
			if (data) {
				return data;
			}
			throw new ResourceNotFoundError(id, "listing");
		} catch (e) {
			throw e
		}
	}

	static async createListing(body) {
		try {
			const data = await got
				.post(`${LISTING_SERVICE_URI}/listings`, {
					json: body,
					responseType: "json"
				})
				.json();
			return data;
		} catch (e) {
			throw e
		}
	}

	static async updateListing(listing) {
		const { id } = listing;
		try {
			const data = await got
				.put(`${LISTING_SERVICE_URI}/listings/${id}`, {
					json: {
						...listing
					},
					responseType: "json"
				})
				.json();
			if (data.id) {
				return data;
			}
			throw new ResourceNotFoundError(id, "listing");
		} catch (e) {
			throw e;
		}
		
	}

	static async deleteListing(id) {
		try {
			const data = await got
				.delete(`${LISTING_SERVICE_URI}/listings/${id}`)
				.json();
			return data;
		} catch (e) {
			throw new ResourceNotFoundError(id, "listing");
		}
	}
}
