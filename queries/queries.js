const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

// Types
const BookType = require('../types/book.type');
const AuthorType = require('../types/author.type');

// Models
const Book = require('../models/book.model');
const Author = require('../models/author.model');

const query =  new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {
        return books.filter(book => book.id = args.id)[0];
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {
        return authors.filter(author => author.id = args.id)[0];
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve (parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve (parent, arg) {
        return authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({ query });