import * as Mutation from "./Mutation";
import * as Query from "./Query";
import { User } from './user'
import { Listing } from './listing'

const resolvers = { Mutation, Query, User, Listing };

// console.log('resolvers/index')
// console.log(resolvers);
export default resolvers;
