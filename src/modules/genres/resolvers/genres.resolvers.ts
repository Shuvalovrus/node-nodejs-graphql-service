module.exports = {
  Query: {
    getGenre: (_, { _id }, { dataSources }) => dataSources.genres.getGenre(_id),
    getGenres: (_, __, { dataSources }) => dataSources.genres.getGenres(),
  },
  Mutation: {
    createGenre: (_, data, { dataSources }) => dataSources.genres.createGenre(data),
    deleteGenre: (_, { id }, { dataSources }) => dataSources.genres.deleteGenre(id),
    updateGenre: (_, data, { dataSources }) => dataSources.genres.updateGenre(data),
  },
};
