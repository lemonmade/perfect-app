import {resolve} from 'path';
import {readFileSync} from 'fs';
import * as React from 'react';

import {buildSchema} from 'graphql';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {createFiller} from 'graphql-fixtures';

import createGraphQLFactory from '@shopify/react-apollo/testing';
import {ErrorBoundary, createAppContextMount} from '@shopify/react-testing';
import {AppProvider} from '@shopify/polaris';

export * from '@shopify/enzyme-utilities';

const schema = buildSchema(
  readFileSync(resolve(__dirname, `../../graphql/schema.graphql`), 'utf8'),
);

export const fillGraphQL = createFiller(schema, {addTypename: true});
export const createGraphQL = createGraphQLFactory();

interface Options {
  resolveInitialGraphQL?: boolean;
  graphQL?: ReturnType<typeof createGraphQL>;
}

interface Context {
  graphQL: ReturnType<typeof createGraphQL>;
}

export const mountWithAppContext = createAppContextMount<
  true,
  Options,
  Context
>({
  context({graphQL = createGraphQL()}) {
    return {graphQL};
  },
  render(element, {graphQL}) {
    return <AppContext graphQLClient={graphQL.client}>{element}</AppContext>;
  },
  async afterMount(wrapper, {graphQL}, {resolveInitialGraphQL = true}) {
    graphQL.afterResolve(() => wrapper.update());

    if (resolveInitialGraphQL) {
      await graphQL.resolveAll();
    }

    return wrapper;
  },
});

interface Props {
  children: React.ReactNode;
  graphQLClient: ApolloClient<unknown>;
}

function AppContext({children, graphQLClient}: Props) {
  return (
    <AppProvider>
      <ApolloProvider client={graphQLClient}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </ApolloProvider>
    </AppProvider>
  );
}
