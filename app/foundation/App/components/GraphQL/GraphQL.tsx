import * as React from 'react';

import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import {Serialize, WithSerializedValue} from '@shopify/react-serialize-next';
import {Omit} from '@shopify/useful-types';

import createGraphQLClient, {Options} from './client';

interface Props {
  client?: ApolloClient<unknown>;
  initialData?: Options['initialData'];
}

interface State {
  client: ApolloClient<unknown>;
}

const SERIALIZE_KEY = 'apollo';

class GraphQL extends React.Component<Props, State> {
  state: State = {client: this.props.client || createGraphQLClient(this.props)};

  render() {
    const {client} = this.state;
    const {children} = this.props;

    return (
      <>
        <ApolloProvider client={client}>{children}</ApolloProvider>
        <Serialize id={SERIALIZE_KEY} data={() => client.extract()} />
      </>
    );
  }
}

export default function ConnectedGraphQL(props: Omit<Props, 'initialData'>) {
  return (
    <WithSerializedValue id={SERIALIZE_KEY}>
      {(initialData: Options['initialData']) => (
        <GraphQL {...props} initialData={initialData} />
      )}
    </WithSerializedValue>
  );
}
