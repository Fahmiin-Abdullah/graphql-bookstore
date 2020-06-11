const graphql = require('grqphql');
const Book = require('../book');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const RootQuery =  new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: Book,
      args: { id: { type: GraphQLString } },
      resolve (parent, args) {

      }
    }
  }
});

module.exports = new GraphQLScheme({ query: RootQuery,  });