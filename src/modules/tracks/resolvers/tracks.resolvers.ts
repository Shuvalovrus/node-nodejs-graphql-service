module.exports = {
  Query: {
    getTrack: (_, args, { dataSources }) => dataSources.tracks.getTrack(args),
    getTracks: (_, __, { dataSources }) => dataSources.tracks.getTracks(),
  },
};
