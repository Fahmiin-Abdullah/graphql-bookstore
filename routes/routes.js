const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const Book = require('../models/book');

// Seed Books
const books = [
  { id: '1', name: 'Name of the Wind', genre: 'Fantasy' },
  { id: '2', name: 'The Final Empire', genre: 'Fantasy' },
  { id: '3', name: 'The Long Earth', genre: 'Sci-Fi' }
];

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