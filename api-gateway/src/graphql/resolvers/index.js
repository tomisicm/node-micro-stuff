import * as Mutation from "./Mutation";
import * as Query from "./Query";
import { User } from './user'
import { Listing } from './listing'
import { Book } from './book'

const resolvers = { Mutation, Query, User, Listing, Book };

// console.log('resolvers/index')
// console.log(resolvers);
export default resolvers;
