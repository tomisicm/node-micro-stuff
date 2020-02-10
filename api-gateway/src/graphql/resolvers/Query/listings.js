import ListingService from "#root/adapters/ListingService";
import isAuthorized from "#root/middleware/auth/isAuthorized";

const listingResolver = async (obj, args, context, info) => {
	try {
		isAuthorized(context.req);
		return await ListingService.fetchAllListings();
	} catch (e) {
		throw e;
	}
};

export default listingResolver;
