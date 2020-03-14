export const typeDefs = `
  extend type Query {
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
      userLogin(userInput: UserInput): AuthData!
    }
  }
`;
