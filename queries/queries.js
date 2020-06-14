const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLInt } = graphql;

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

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve (parent, args) {
        let author = new Author({
          name: args.name, age: args.age
        });
        return author.save();
      }
    },
    createBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID },
      },
      resolve (parents, args) {
        let book = new Book({
          name: args.name, genre: args.genre, authorId: args.authorId
        });
        return book.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({ query, mutation });