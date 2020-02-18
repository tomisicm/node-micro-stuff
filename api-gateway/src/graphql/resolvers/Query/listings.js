import ListingService from "#root/adapters/ListingService";
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
		return await ListingService.fetchListingById(id);
	} catch (e) {
		throw e;
	}
};

export { listingsResolver as listings, listingResolver as listing };
