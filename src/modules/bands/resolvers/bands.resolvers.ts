module.exports = {
  Query: {
    getBand: (_, args, { dataSources }) => dataSources.bands.getBand(args),
    getBands: (_, __, { dataSources }) => dataSources.bands.getBands(),
  },
};
