const { makeExecutableSchema } =  require('graphql-tools');
import { merge } from "lodash"

import resolvers from "./resolvers"
import typeDefs from "./schemas"

// console.log(typeDefs)
// console.log(resolvers)

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: merge(resolvers)
});
