module.exports = {
  Query: {
    getAlbum: (_, args, { dataSources }) => dataSources.albums.getAlbum(args),
    getAlbums: (_, __, { dataSources }) => dataSources.albums.getAlbums(),
  },
};
