import ListingService from "#root/adapters/ListingService";
import isAuthorized from "#root/middleware/auth/isAuthorized";

const createListingResolver = async (obj, args, context, info) => {
	const { listingInput } = args;
	try {
		isAuthorized(context.req);
		const listing = await ListingService.createListing(listingInput);
		return listing;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const updateListingResolver = async (obj, args, context, info) => {
	const { listingInput } = args;
	console.log(args);
	try {
		isAuthorized(context.req);
		const listing = await ListingService.updateListing(listingInput);
		return listing;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const deleteListingResolver = async (obj, args, context, info) => {
	const { listingInput } = args;
	try {
		isAuthorized(context.req);
		const listing = await ListingService.deleteListing(listingInput);
		return listing;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export {
	createListingResolver as createListing,
	updateListingResolver as updateListing,
	deleteListingResolver as deleteListing
};
