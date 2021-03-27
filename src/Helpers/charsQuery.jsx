import { gql } from "@apollo/client";

const charsQuery = gql`
    query Characters($page: Int) {
      characters(page: $page){
      results {
        id
        name
        status
        type
        gender
        image
      }
      info {
        pages
      }
    }
  }
`;
export default charsQuery;