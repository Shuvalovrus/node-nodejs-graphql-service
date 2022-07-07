module.exports = {
  Query: {
    getUser: (_, args, { dataSources }) => dataSources.users.getUser(args),
    getJwt: (_, { email, password }, { dataSources }) => dataSources.users.getJwt(email, password),
  },
};
