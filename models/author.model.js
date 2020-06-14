const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;

module.exports = Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => {
    const Book = require('./book.model');
    const booksSeed = require('../seeds/books.seed');

    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      books: {
        type: new GraphQLList(Book),
        resolve (parent, args) {
          return booksSeed.filter(book => book.authorId == parent.id);
        }
      }
    }
  }
});
