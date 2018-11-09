import {resolve} from 'path';
import {readFileSync} from 'fs';
import * as React from 'react';
import {buildSchema} from 'graphql';

import createGraphQLClientFactory from '@shopify/jest-mock-apollo';
import {ErrorBoundary, createAppContextMount} from '@shopify/react-testing';
import {AppProvider} from '@shopify/polaris';

export * from '@shopify/enzyme-utilities';

const schema = buildSchema(
  readFileSync(resolve(__dirname, `../schema.graphql`), 'utf8'),
);

export const createGraphQLClient = createGraphQLClientFactory({
  schema,
});

interface Options {
  resolveInitialGraphQL?: boolean;
  graphQLClient?: ReturnType<typeof createGraphQLClient>;
}

export const mountWithAppContext = createAppContextMount<Options>({
  context: {
    graphQLClient({graphQLClient = createGraphQLClient()}) {
      return graphQLClient;
    },
  },
  render(element) {
    return <AppContext>{element}</AppContext>;
  },
  async afterMount(wrapper, {resolveInitialGraphQL = false}) {
    if (resolveInitialGraphQL) {
      await wrapper.graphQLClient.promise();
    }

    return wrapper;
  },
});

interface Props {
  children: React.ReactNode;
}

function AppContext({children}: Props) {
  return (
    <AppProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </AppProvider>
  );
}
