const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const Book = require('../models/book.model');
const books = require('../seeds/books.seed');

const RootQuery =  new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: Book,
      args: { id: { type: GraphQLString } },
      resolve (parent, args) {
        return books.filter(book => book.id = args.id)[0];
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });