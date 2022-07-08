module.exports = {
  Query: {
    getArtist: (_, args, { dataSources }) => dataSources.artists.getArtist(args),
    getArtists: (_, __, { dataSources }) => dataSources.artists.getArtists(),
  },
};
