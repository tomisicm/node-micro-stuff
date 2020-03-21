import { mergeTypes } from 'merge-graphql-schemas';

import { typeDef as Listing } from "./listing";
import { typeDef as User } from "./user";

const types = [
  Listing,
  User
]

const mergedSchema = mergeTypes(types, { all: true });

// console.log(mergedSchema)

export default mergedSchema;
