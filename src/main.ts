const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./fileMerged');
const Users = require('./modules/users/services/users-services');
const Albums = require('./modules/albums/services/albums-services');
const Artists = require('./modules/artists/services/artists-services');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new Users(),
    albums: new Albums(),
    artists: new Artists(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
