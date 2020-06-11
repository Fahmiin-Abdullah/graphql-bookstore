const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;

// Models
const Book = require('./book.model');

// Seeds
const booksSeed = require('../seeds/books.seed');

const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(Book),
      resolve (parent, args) {
        return booksSeed.filter(book => book.authorId == parent.id);
      }
    }
  })
});

module.exports = Author;