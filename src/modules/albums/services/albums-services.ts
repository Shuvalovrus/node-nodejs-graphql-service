require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class AlbumsServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAlbum(id) {
    const data = await this.get(`/${id.id}`);
    // eslint-disable-next-line no-underscore-dangle
    return { id: data._id, ...data };
  }

  async getAlbums() {
    const data = await this.get('');
    return data.items;
  }
}

module.exports = AlbumsServices;
