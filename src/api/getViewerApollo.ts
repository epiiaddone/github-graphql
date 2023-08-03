import { gql } from '@apollo/client';

export const GET_VIEWER_QUERY_APOLLO = gql`
 query {
 viewer {
 name
 avatarUrl
 }
 }
`;



