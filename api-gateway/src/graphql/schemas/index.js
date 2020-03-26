import { mergeTypes } from 'merge-graphql-schemas';

import { typeDef as Listing } from "./listing";
import { typeDef as User } from "./user";
import { typeDef as Book } from "./book";

const types = [
  Listing,
  User,
  Book
]

const mergedSchema = mergeTypes(types, { all: true });

// console.log(mergedSchema)

export default mergedSchema;
