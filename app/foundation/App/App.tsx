import * as React from 'react';

import ApolloClient from 'apollo-client';
import {StaticRouter, BrowserRouter} from 'react-router-dom';

import {AppProvider} from '@shopify/polaris';
import {
  Manager as SerializationManager,
  BrowserManager as BrowserSerializationManager,
  Provider as SerializationProvider,
} from '@shopify/react-serialize-next';
import {
  Manager as NetworkManager,
  Provider as NetworkProvider,
} from '@shopify/react-network';

import Link from '../Link';
import Routes from '../Routes';

import {ContentSecurityPolicy, GraphQL, I18n} from './components';

interface Props {
  locale?: string;
  server?: boolean;
  location?: string;
  graphQLClient?: ApolloClient<unknown>;
  networkManager?: NetworkManager;
  serializationManager?: SerializationManager;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<Props> {
  render() {
    const {
      server,
      location,
      graphQLClient,
      networkManager,
      serializationManager = new BrowserSerializationManager(),
      locale = 'en',
    } = this.props;

    const Router = server && location ? StaticRouter : BrowserRouter;

    return (
      <NetworkProvider manager={networkManager}>
        <SerializationProvider manager={serializationManager}>
          <ContentSecurityPolicy />
          <GraphQL client={graphQLClient}>
            <I18n locale={locale}>
              <AppProvider linkComponent={Link}>
                <Router location={location} context={{}}>
                  <Routes />
                </Router>
              </AppProvider>
            </I18n>
          </GraphQL>
        </SerializationProvider>
      </NetworkProvider>
    );
  }
}
