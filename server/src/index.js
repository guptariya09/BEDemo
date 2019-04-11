import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from './resolvers'
import LaunchAPI from './datasources/launch'
import UserAPI  from './datasources/user'
// const LaunchAPI = require('./datasources/launch');
// const UserAPI = require('./datasources/user');


const server = new ApolloServer({
     typeDefs, 
     resolvers,
    // dataSources: () => ({
    //   launchAPI: new LaunchAPI(),
    //   userAPI: new UserAPI({ store }),
    // }) 
  });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});