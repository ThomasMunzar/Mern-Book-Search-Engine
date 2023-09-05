// Login
// Add User
// Save Book
// Delete Book

import { gql } from '@apollo/client';

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const addUser = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const saveBook = gql`
mutation saveBook ($bookData: bookInput) {
    saveBook (bookInput: $bookData)
}
`;

export const removeBook = gql`
mutation removeBook ($bookId: bookInput) {
    removeBook (bookInput: $bookId)
}
`;