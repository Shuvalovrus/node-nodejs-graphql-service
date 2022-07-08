const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./fileMerged');
const Users = require('./modules/users/services/users-services');
const Albums = require('./modules/albums/services/albums-services');
const Artists = require('./modules/artists/services/artists-services');
const Bands = require('./modules/bands/services/bands-services');
const Genres = require('./modules/genres/services/genres-services');
const Tracks = require('./modules/tracks/services/tracks-services');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new Users(),
    albums: new Albums(),
    artists: new Artists(),
    bands: new Bands(),
    genres: new Genres(),
    tracks: new Tracks(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
