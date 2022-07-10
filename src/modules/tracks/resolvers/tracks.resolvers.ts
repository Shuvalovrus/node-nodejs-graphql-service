module.exports = {
  Query: {
    getTrack: (_, { id }, { dataSources }) => dataSources.tracks.getTrack(id),
    getTracks: (_, __, { dataSources }) => dataSources.tracks.getTracks(),
  },

  Track: {
    artists: ({ artistsIds }, __, { dataSources }) => artistsIds.map((id) => {
      return dataSources.artists.getArtist(id);
    }),
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => {
      return dataSources.bands.getBands(id);
    }),
    genres: ({ genresIds }, __, { dataSources }) => genresIds.map((id) => {
      return dataSources.genres.getGenre(id);
    }),
  },
};
