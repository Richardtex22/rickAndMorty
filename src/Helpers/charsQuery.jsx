import { gql } from "@apollo/client";

const charsQuery = gql`
    query Characters($page: Int, $filter: FilterCharacter) {
      characters(page: $page, filter: $filter){
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