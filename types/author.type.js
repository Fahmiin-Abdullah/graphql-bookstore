const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;

module.exports = AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  fields: () => {
    const BookType = require('./book.type');
    const Book = require('../models/book.model');

    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      books: {
        type: new GraphQLList(BookType),
        resolve (parent, args) {
          return Book.find({ authorId: parent.id });
        }
      }
    }
  }
});
