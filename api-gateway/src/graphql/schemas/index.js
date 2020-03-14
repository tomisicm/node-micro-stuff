import { mergeTypes } from 'merge-graphql-schemas';

import { typeDef as Listing } from "./listing";
import { typeDef as User } from "./user.js";

const types = [
	Listing,
	User
]

export default mergeTypes(types, { all: true });
