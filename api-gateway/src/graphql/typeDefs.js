import { gql } from "apollo-server";

const typeDefs = gql`
	type Listing {
		description: String!
		id: ID!
		title: String!
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

	type Mutation {
		createUser(userInput: UserInput): User!
	}

	type Query {
		listings: [Listing!]!
		userLogin(userInput: UserInput): AuthData!
	}
`;

export default typeDefs;
