import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
 mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          description
          image
          link
          title
        }
      }
    }
 }
`;

export const ADD_USER = gql`
 mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          description
          image
          link
          title
        }
      }
    }
 }
`;

export const SAVE_BOOK = gql`
 mutation SaveBook($userId: ID!, $book: BookInput!) {
    addBook(userId: $userId, book: $book) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
 }
`;

export const REMOVE_BOOK = gql`
 mutation RemoveBook($userId: ID!, $bookId: String!) {
    removeBook(userId: $userId, bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
 }
`;