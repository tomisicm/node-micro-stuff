import { userLoader } from '../dataloaders/userLoader'

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
    }
}

export { Listing };