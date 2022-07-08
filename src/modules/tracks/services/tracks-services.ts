require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class TracksServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getTrack(id) {
    const data = await this.get(`/${id.id}`);
    // eslint-disable-next-line no-underscore-dangle
    return { id: data._id, ...data };
  }

  async getTracks() {
    const data = await this.get('');
    return data.items;
  }
}

module.exports = TracksServices;
