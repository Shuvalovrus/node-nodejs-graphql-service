require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class BandsServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  async getBand(id) {
    const data = await this.get(`/${id.id}`);
    // eslint-disable-next-line no-underscore-dangle
    return { id: data._id, ...data };
  }

  async getBands() {
    const data = await this.get('');
    return data.items;
  }
}

module.exports = BandsServices;
