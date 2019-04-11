import { resolver_query } from "./resolvers/queries";
console.log(resolver_query())

export const resolvers = {
    Query: resolver_query(),
}