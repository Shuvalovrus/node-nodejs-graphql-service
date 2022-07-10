require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class BandsServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getBand(id) {
    return this.get(`/${id}`);
  }

  async getBands() {
    const data = await this.get('');
    return data.items;
  }

  async createBand(data) {
    return this.post('', data.data);
  }

  async deleteBand(id) {
    return this.delete(`/${id}`);
  }

  async updateBand(data) {
    // eslint-disable-next-line no-underscore-dangle
    return this.put(`/${data.data._id}`, { ...data.data });
  }
}

module.exports = BandsServices;
