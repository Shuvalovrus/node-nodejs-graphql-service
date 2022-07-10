require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class GenresServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getGenre(id) {
    return this.get(`/${id}`);
  }

  async getGenres() {
    const data = await this.get('');
    return data.items;
  }

  async createGenre(data) {
    return this.post('', data.data);
  }

  async deleteGenre(id) {
    return this.delete(`/${id}`);
  }

  async updateGenre(data) {
    // eslint-disable-next-line no-underscore-dangle
    return this.put(`/${data.data._id}`, { ...data.data });
  }
}

module.exports = GenresServices;
