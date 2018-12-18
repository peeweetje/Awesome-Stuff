import React from "react";
import PaginationStyles from "./styles/PaginationStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;
const Pagination = props => (
  <PaginationStyles>
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => (
        <p>Hi im the pagination!{data.itemsConnection.aggregate.count}</p>
      )}
    </Query>
  </PaginationStyles>
);

export default Pagination;
