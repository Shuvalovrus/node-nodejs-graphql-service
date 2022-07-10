require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class AlbumsServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getAlbum(id) {
    return this.get(`/${id}`);
  }

  async getAlbums() {
    const data = await this.get('');
    return data.items;
  }

  async createAlbum(data) {
    return this.post('', data.data);
  }

  async deleteAlbum(id) {
    return this.delete(`/${id}`);
  }

  async updateAlbum(data) {
    // eslint-disable-next-line no-underscore-dangle
    return this.put(`/${data.data._id}`, { ...data.data });
  }
}

module.exports = AlbumsServices;
