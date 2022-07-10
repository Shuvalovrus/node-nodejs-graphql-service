module.exports = {
  Query: {
    getArtist: (_, { id }, { dataSources }) => dataSources.artists.getArtist(id),
    getArtists: (_, __, { dataSources }) => dataSources.artists.getArtists(),
  },
  Mutation: {
    createArtist: (_, data, { dataSources }) => dataSources.artists.createArtist(data),
    deleteArtist: (_, { id }, { dataSources }) => dataSources.artists.deleteArtist(id),
    updateArtist: (_, data, { dataSources }) => dataSources.artists.updateArtist(data),
  },
  Artist: {
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => dataSources.bands.getBand(id)),
  },
};
