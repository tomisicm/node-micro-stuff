import ListingService from "#root/adapters/ListingService";
import UserService from "#root/adapters/UserService";
import isAuthorized from "#root/middleware/auth/isAuthorized";

const listingsResolver = async (obj, args, context, info) => {
	try {
		isAuthorized(context.req);
		return await ListingService.fetchAllListings();
	} catch (e) {
		throw e;
	}
};

const listingResolver = async (obj, args, context, info) => {
	const { id } = args;
	try {
		isAuthorized(context.req);
		const listing = await ListingService.fetchListingById(id);
		return listing;
	} catch (e) {
		throw e;
	}
};

export { listingsResolver as listings, listingResolver as listing };
