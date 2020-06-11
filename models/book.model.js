const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

// Models
const Author = require('./author.model');

// Seeds
const authorsSeed = require('../seeds/authors.seed');

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: Author,
      resolve (parent, args) {
        return authorsSeed.filter(author => author.id == parent.authorId)[0];
      }
    }
  })
});

module.exports = Book;