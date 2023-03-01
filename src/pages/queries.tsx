import { graphql } from "../gql";
export const GET_Platforms = graphql(`
  query Platforms {
    platforms {
        id
        title
    }
  }
`);

export const GET_Regions = graphql(`
query Regions($input: RegionsInput!) {
    regions(input: $input) {
      id
      title
    }
  }
`);
