import gql from "graphql-tag";

const charById = gql`
query charById($id: ID!) {
    character(id: $id){
      id
      name
      status
      species
      type
      image
      location {
          name
          type
      }
    }
  }
`;
export default charById;