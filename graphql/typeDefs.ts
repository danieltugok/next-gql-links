import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
type Query {
  links: [Link]

}

type Link {
  id: ID
  title: String
  url: String
}
`;