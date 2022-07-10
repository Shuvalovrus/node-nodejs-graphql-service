require('dotenv').config();
// @ts-ignore
const { RESTDataSource } = require('apollo-datasource-rest');

class FavouritesServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITE_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getAll() {
    return this.get('');
  }

  async addTrack(id) {
    return this.put('/add', { id, type: 'tracks' });
  }

  async addBand(id) {
    return this.put('/add', { id, type: 'bands' });
  }

  async addArtist(id) {
    return this.put('/add', { id, type: 'artists' });
  }

  async addGenre(id) {
    return this.put('/add', { id, type: 'genres' });
  }

  async remove(body) {
    return this.put('/remove', { ...body });
  }
}

module.exports = FavouritesServices;
