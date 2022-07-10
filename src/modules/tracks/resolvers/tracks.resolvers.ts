module.exports = {
  Query: {
    getTrack: (_, { id }, { dataSources }) => dataSources.tracks.getTrack(id),
    getTracks: (_, __, { dataSources }) => dataSources.tracks.getTracks(),
  },
  Mutation: {
    createTrack: (_, data, { dataSources }) => dataSources.tracks.createTrack(data),
    deleteTrack: (_, { id }, { dataSources }) => dataSources.tracks.deleteTrack(id),
    updateTrack: (_, data, { dataSources }) => dataSources.tracks.updateTrack(data),
  },
  Track: {
    album: ({ albumId }, __, { dataSources }) => {
      if (albumId) return dataSources.albums.getAlbum(albumId);
    },
    artists: ({ artistsIds }, __, { dataSources }) => artistsIds.map((id) => dataSources.artists.getArtist(id)),
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => dataSources.bands.getBands(id)),
    genres: ({ genresIds }, __, { dataSources }) => genresIds.map((id) => dataSources.genres.getGenre(id)),
  },
};
