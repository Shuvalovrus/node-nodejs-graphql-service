module.exports = {
  Query: {
    getBand: (_, { _id }, { dataSources }) => dataSources.bands.getBand(_id),
    getBands: (_, __, { dataSources }) => dataSources.bands.getBands(),
  },
  Mutation: {
    createBand: (_, data, { dataSources }) => dataSources.bands.createBand(data),
    deleteBand: (_, { id }, { dataSources }) => dataSources.bands.deleteBand(id),
    updateBand: (_, data, { dataSources }) => dataSources.bands.updateBand(data),
  },
  Band: {
    genres: ({ genresIds }, __, { dataSources }) => genresIds.map((id) => dataSources.genres.getGenre(id)),
  },
};
