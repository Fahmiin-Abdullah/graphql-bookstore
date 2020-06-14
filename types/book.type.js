const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

module.exports = BookType = new GraphQLObjectType({
  name: 'BookType',
  fields: () => {
    const AuthorType = require('./author.type');
    const Author = require('../models/author.model');

    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve (parent, args) {
          return Author.findById(parent.authorId);
        }
      }
    }
  }
});
