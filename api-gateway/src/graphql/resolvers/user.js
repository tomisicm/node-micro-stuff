import UserService from "#root/adapters/UserService";

const User = { 
    id: (root, args, context, info) => {
        console.log(root)
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