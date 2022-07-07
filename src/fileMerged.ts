const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolversArray = loadFilesSync(path.join(__dirname, './**/*.resolvers.*'), { extensions: ['ts'] });

const typesArray = loadFilesSync(path.join(__dirname, 'modules/**/*.graphql'), { extensions: ['graphql'] });

module.exports = {
  typeDefs: mergeTypeDefs(typesArray),
  resolvers: mergeResolvers(resolversArray),
};
