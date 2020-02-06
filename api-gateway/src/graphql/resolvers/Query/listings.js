import ListingService from "#root/adapters/ListingService";

const listingResolver = async () => {
    return await ListingService.fetchAllListings();
};

export default listingResolver;