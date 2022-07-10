const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./FileMerger');
const Users = require('./modules/users/services/users-services');
const Albums = require('./modules/albums/services/albums-services');
const Artists = require('./modules/artists/services/artists-services');
const Bands = require('./modules/bands/services/bands-services');
const Genres = require('./modules/genres/services/genres-services');
const Tracks = require('./modules/tracks/services/tracks-services');
const Favourites = require('./modules/favourites/services/favourites-services');

const port = process.env.PORT || 4000;

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
    favourites: new Favourites(),
  }),
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    return { token };
  },
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
