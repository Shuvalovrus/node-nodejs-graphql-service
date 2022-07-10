module.exports = {
  Query: {
    getAllFavourites: (_, __, { dataSources }) => dataSources.favourites.getAll(),
  },
  Mutation: {
    addTrackToFavourites: (_, { id }, { dataSources }) => dataSources.favourites.addTrack(id),
    addBandToFavourites: (_, { id }, { dataSources }) => dataSources.favourites.addBand(id),
    addArtistToFavourites: (_, { id }, { dataSources }) => dataSources.favourites.addArtist(id),
    addGenreToFavourites: (_, { id }, { dataSources }) => dataSources.favourites.addGenre(id),
    removeFavourite: (_, { data }, { dataSources }) => dataSources.favourites.remove(data),
  },
  Favourites: {
    artists: ({ artistsIds }, __, { dataSources }) => artistsIds.map((id) => dataSources.artists.getArtist(id)),
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => dataSources.bands.getBand(id)),
    tracks: ({ tracksIds }, __, { dataSources }) => tracksIds.map((id) => dataSources.tracks.getTrack(id)),
    genres: ({ genresIds }, __, { dataSources }) => genresIds.map((id) => dataSources.genres.getGenre(id)),
  },
};
