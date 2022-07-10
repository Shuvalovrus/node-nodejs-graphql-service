module.exports = {
  Query: {
    getTrack: (_, { id }, { dataSources }) => dataSources.tracks.getTrack(id),
    getTracks: (_, __, { dataSources }) => dataSources.tracks.getTracks(),
  },
};
