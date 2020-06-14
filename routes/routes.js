const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

// Models
const Book = require('../models/book.model');
const Author = require('../models/author.model');

// Seeds
const books = require('../seeds/books.seed');
const authors = require('../seeds/authors.seed');

const query =  new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: Book,
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {
        return books.filter(book => book.id = args.id)[0];
      }
    },
    author: {
      type: Author,
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {
        return authors.filter(author => author.id = args.id)[0];
      }
    },
    books: {
      type: new GraphQLList(Book),
      resolve (parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(Author),
      resolve (parent, arg) {
        return authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query });