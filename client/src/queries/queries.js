import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const createBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`

export { getAuthorsQuery, getBooksQuery, createBookMutation, getBookQuery };
