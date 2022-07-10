require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class ArtistsServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getArtist(id) {
    const data = await this.get(`/${id}`);
    // eslint-disable-next-line no-underscore-dangle
    return { id: data._id, ...data };
  }

  async getArtists() {
    const data = await this.get('');
    return data.items;
  }
}

module.exports = ArtistsServices;
