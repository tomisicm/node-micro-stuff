import got from "got";

const LISTING_SERVICE_URI = "http://listings-service:7100";

export default class ListingService {
	static async fetchAllListings() {
		const data = await got.get(`${LISTING_SERVICE_URI}/listings`).json();
		return data;
	}
}
