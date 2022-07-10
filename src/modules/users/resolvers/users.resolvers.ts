module.exports = {
  Query: {
    getUser: (_, args, { dataSources }) => dataSources.users.getUser(args),
    getJwt: (_, { email, password }, { dataSources }) => dataSources.users.getJwt(email, password),
  },
  Mutation: {
    registerUser: async (_, {
      firstName, lastName, password, email,
    }, { dataSources }) => dataSources.users.registerUser(firstName, lastName, password, email),
  },
};
