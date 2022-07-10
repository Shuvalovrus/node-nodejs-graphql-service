module.exports = {
  Query: {
    getAlbum: (_, args, { dataSources }) => dataSources.albums.getAlbum(args),
    getAlbums: (_, __, { dataSources }) => dataSources.albums.getAlbums(),
  },

  Album: {
    artists: ({ artistsIds }, __, { dataSources }) => artistsIds.map((id) => {
      return dataSources.artists.getArtist(id);
    }),
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => {
      return dataSources.bands.getBands(id);
    }),
    tracks: ({ trackIds }, __, { dataSources }) => trackIds.map((id) => {
      return dataSources.tracks.getTrack(id);
    }),
    genres: ({ genresIds }, __, { dataSources }) => genresIds.map((id) => {
      return dataSources.genres.getGenre(id);
    }),
  },
};
