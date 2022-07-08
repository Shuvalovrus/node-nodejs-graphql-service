module.exports = {
  Query: {
    getGenre: (_, args, { dataSources }) => dataSources.genres.getGenre(args),
    getGenres: (_, __, { dataSources }) => dataSources.genres.getGenres(),
  },
};
