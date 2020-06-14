const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

module.exports = Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => {
    const Author = require('./author.model');
    const authorsSeed = require('../seeds/authors.seed');

    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: Author,
        resolve (parent, args) {
          return authorsSeed.filter(author => author.id == parent.authorId)[0];
        }
      }
    }
  }
});
