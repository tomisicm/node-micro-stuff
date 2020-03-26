export const typeDef = `
  type Book {
    id: ID!
    title: String!
    authorId: ID
    author: User
    createdBy: ID!
    creator: User
  }
`;
