import ListingService from "#root/adapters/ListingService";
import isAuthorized from "#root/middleware/auth/isAuthorized";

const createListingResolver = async (obj, args, context, info) => {
	const { listingInput } = args;
	try {
		isAuthorized(context.req);
		listingInput.createdBy = context.req.user.id;
		const listing = await ListingService.createListing(listingInput);
		return listing;
	} catch (e) {
		console.log(e);
		throw e;
	}
};

const updateListingResolver = async (obj, args, context, info) => {
	const { listingInput } = args;
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
	const { id } = args;
	try {
		isAuthorized(context.req);
		const isDeleted = await ListingService.deleteListing(id);
		return isDeleted;
	} catch (e) {
		throw e;
	}
};

export {
	createListingResolver as createListing,
	updateListingResolver as updateListing,
	deleteListingResolver as deleteListing
};
