module.exports = {
  Query: {
    getArtist: (_, { id }, { dataSources }) => dataSources.artists.getArtist(id),
    getArtists: (_, __, { dataSources }) => dataSources.artists.getArtists(),
  },
  Artist: {
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => {
      return dataSources.bands.getBands(id);
    }),
  },
};
