import { typeDef as Listing } from "./listing";
import { typeDef as User } from "./user.js";

const Query = `
  type Query {
    author(id: Int!): Post
    book(id: Int!): Post
  }
`;

makeExecutableSchema({
	typeDefs: [Query, Listing, User],
	resolvers: {}
});
