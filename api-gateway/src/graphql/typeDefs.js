import { gql } from "apollo-server";

const typeDefs = gql`
	type Listing {
		description: String!
		id: ID!
		title: String!
		createdBy: ID!
	}

	type User {
		id: ID!
		email: String!
	}

	type AuthData {
		id: ID!
		token: String!
		expiresIn: String!
	}

	input UserInput {
		email: String!
		password: String!
	}

	input ListingInput {
		id: ID
		title: String!
		description: String!
	}

	type Mutation {
		createUser(userInput: UserInput): User!
		createListing(listingInput: ListingInput): Listing!
		updateListing(listingInput: ListingInput): Listing!
		deleteListing(id: ID!): Boolean!
	}

	type Query {
		listings: [Listing!]!
		listing(id: ID!): Listing!
		userLogin(userInput: UserInput): AuthData!
	}
`;

export default typeDefs;
