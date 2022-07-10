module.exports = {
  Query: {
    getGenre: (_, { id }, { dataSources }) => dataSources.genres.getGenre(id),
    getGenres: (_, __, { dataSources }) => dataSources.genres.getGenres(),
  },
  Mutation: {
    createGenre: (_, data, { dataSources }) => dataSources.genres.createGenre(data),
    deleteGenre: (_, { id }, { dataSources }) => dataSources.genres.deleteGenre(id),
    updateGenre: (_, data, { dataSources }) => dataSources.genres.updateGenre(data),
  },
};
