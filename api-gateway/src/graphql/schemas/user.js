export const typeDef = `
  type User {
    id: ID!
    email: String!
    isthisit: String!
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
`;
