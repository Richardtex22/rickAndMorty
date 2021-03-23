import gql from "graphql-tag";

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