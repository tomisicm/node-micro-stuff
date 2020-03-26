const Book = { 
    id: (root, args, context, info) => {
        return root.id
    },
    title: (root, args, context, info) => {
        return root.title
    },
    authorId: (root, args, context, info) => {
        return root.authorId
    },
    createdBy: (root, args, context, info) => {
        return root.createdBy
    },
    author: async (root, args, context, info) => {
        if (root.authorId) {
            return await context.loaders.user.load(root.authorId);
        }
    },
    creator: async (root, args, context, info) => {
        if (root.createdBy) {
            return await context.loaders.user.load(root.createdBy);
        }
    }
}

export { Book };