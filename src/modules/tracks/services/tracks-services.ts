require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class TracksServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getTrack(id) {
    const data = await this.get(`/${id}`);
    // eslint-disable-next-line no-underscore-dangle
    return { id: data._id, ...data };
  }

  async getTracks() {
    const data = await this.get('');
    return data.items;
  }

  async createTrack(data) {
    return this.post('', data.data);
  }

  async deleteTrack(id) {
    return this.delete(`/${id}`);
  }

  async updateTrack(data) {
    // eslint-disable-next-line no-underscore-dangle
    return this.put(`/${data.data._id}`, { ...data.data });
  }
}

module.exports = TracksServices;
