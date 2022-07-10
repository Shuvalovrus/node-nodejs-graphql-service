require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class ArtistsServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
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

  async createArtist(data) {
    return this.post('', data.data);
  }

  async deleteArtist(id) {
    return this.delete(`/${id}`);
  }

  async updateArtist(data) {
    // eslint-disable-next-line no-underscore-dangle
    return this.put(`/${data.data._id}`, { ...data.data });
  }
}

module.exports = ArtistsServices;
