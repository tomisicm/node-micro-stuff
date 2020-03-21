import UserService from "#root/adapters/UserService";

const User = { 
    id: (root, args, context, info) => {
        return root.id
    },
    email: (root, args, context, info) => {
        return root.email
    },
    isthisit: (root, args, context, info) => {
        return "isthisit"
    }
}

export { User };