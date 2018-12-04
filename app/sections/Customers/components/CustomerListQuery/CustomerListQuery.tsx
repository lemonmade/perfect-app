import * as React from 'react';
import {Query, QueryProps} from '@shopify/react-apollo';
import {Omit} from '@shopify/useful-types';

import customerListQuery, {
  CustomerListTwoQueryData,
} from './graphql/CustomerListQuery.graphql';

function Prefetch() {
  return (
    <Query query={customerListQuery} ssr={false}>
      {() => null}
    </Query>
  );
}

function KeepFresh() {
  return (
    <Query pollInterval={20000} ssr={false} query={customerListQuery}>
      {() => null}
    </Query>
  );
}

export default class CustomerListQuery extends React.Component<
  Omit<QueryProps<CustomerListTwoQueryData, {}>, 'query'>,
  never
> {
  static Prefetch = Prefetch;
  static KeepFresh = KeepFresh;

  render() {
    return <Query query={customerListQuery} {...this.props} />;
  }
}
