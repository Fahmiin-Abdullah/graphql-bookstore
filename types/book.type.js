const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

module.exports = BookType = new GraphQLObjectType({
  name: 'BookType',
  fields: () => {
    const AuthorType = require('./author.type');
    const authorsSeed = require('../seeds/authors.seed');

    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve (parent, args) {
          return authorsSeed.filter(author => author.id == parent.authorId)[0];
        }
      }
    }
  }
});
