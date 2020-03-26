import BookService from "#root/adapters/BookService";

const Listing = { 
    id: (root, args, context, info) => {
        return root.id
    },
    description: (root, args, context, info) => {
        return root.description
    },
    title: (root, args, context, info) => {
        return root.title
    },
    createdBy: (root, args, context, info) => {
        return root.createdBy
    },
    creator: async (root, args, context, info) => {
        return await context.loaders.user.load(root.createdBy);
    },
    bookIds: (root, args, context, info) => {
        return root.bookIds.map(idObj => idObj.id)
    },
    books: async (root, args, context, info) => {
        const books = await BookService.fetchAllBooksForListing(root.bookIds.map(idObj => idObj.id))
        return books;
    }
}

export { Listing };