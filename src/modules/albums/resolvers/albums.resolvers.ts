module.exports = {
  Query: {
    getAlbum: (_, { id }, { dataSources }) => dataSources.albums.getAlbum(id),
    getAlbums: (_, __, { dataSources }) => dataSources.albums.getAlbums(),
  },
  Mutation: {
    createAlbum: (_, data, { dataSources }) => dataSources.albums.createAlbum(data),
    deleteAlbum: (_, { id }, { dataSources }) => dataSources.albums.deleteAlbum(id),
    updateAlbum: (_, data, { dataSources }) => dataSources.albums.updateAlbum(data),
  },
  Album: {
    artists: ({ artistsIds }, __, { dataSources }) => artistsIds.map((id) => dataSources.artists.getArtist(id)),
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => dataSources.bands.getBands(id)),
    tracks: ({ trackIds }, __, { dataSources }) => trackIds.map((id) => dataSources.tracks.getTrack(id)),
    genres: ({ genresIds }, __, { dataSources }) => genresIds.map((id) => dataSources.genres.getGenre(id)),
  },
};
