// Get Me 

export const me = gql`
  
    me{
      _id
      username
      email
      bookCount
      savedBooks{
        bookId
        authors
        description
        title
        image
        link
        }
      }
    }
  
`;