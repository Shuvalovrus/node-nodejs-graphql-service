module.exports = {
  Query: {
    getArtist: (_, { id }, { dataSources }) => dataSources.artists.getArtist(id),
    getArtists: (_, __, { dataSources }) => dataSources.artists.getArtists(),
  },
  Mutation: {
    createArtist: (_, data, { dataSources }) => {
      return dataSources.artists.createArtist(data);
    },
    deleteArtist: (_, { id }, { dataSources }) => {
      return dataSources.artists.deleteArtist(id);
    },
    updateArtist: (_, data, { dataSources }) => {
      return dataSources.artists.updateArtist(data);
    },
  },
  Artist: {
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => {
      return dataSources.bands.getBand(id);
    }),
  },
};
