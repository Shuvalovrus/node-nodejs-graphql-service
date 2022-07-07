require('dotenv').config();
const { RESTDataSource } = require('apollo-datasource-rest');

class UsersServices extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  async getUser(id: any) {
    const data = await this.get(`/${id.id}`);
    // eslint-disable-next-line no-underscore-dangle
    return { id: data._id, ...data };
  }

  async getJwt(email, password) {
    return this.post('/login', {
      email,
      password,
    });
  }
}

module.exports = UsersServices;
