export const typeDef = `
  type Listing {
    description: String!
    id: ID!
    title: String!
    createdBy: ID!
    creator: User!
  }
  
  input ListingInput {
    id: ID
    title: String!
    description: String!
  }
  
  type Mutation {
    createListing(listingInput: ListingInput): Listing!
    updateListing(listingInput: ListingInput): Listing!
    deleteListing(id: ID!): Boolean!
  }
  
  type Query {
    listings: [Listing!]!
    listing(id: ID!): Listing!
  }
`;
