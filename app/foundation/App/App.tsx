import * as React from 'react';

import ApolloClient from 'apollo-client';
import {StaticRouter, BrowserRouter} from 'react-router-dom';

import {AppProvider} from '@shopify/polaris';
import {
  Manager as SerializationManager,
  Provider as SerializationProvider,
} from '@shopify/react-serialize-next';
import {Manager as I18nManager} from '@shopify/react-i18n-next';
import {
  Manager as NetworkManager,
  Provider as NetworkProvider,
} from '@shopify/react-network';

import Link from '../Link';
import Routes from '../Routes';

import {ContentSecurityPolicy, GraphQL, I18n} from './components';

interface Props {
  server?: boolean;
  location?: string;
  locale?: string;
  i18nManager?: I18nManager;
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
      i18nManager,
      graphQLClient,
      networkManager,
      serializationManager,
      locale = 'en',
    } = this.props;

    const Router = server && location ? StaticRouter : BrowserRouter;

    return (
      <NetworkProvider manager={networkManager}>
        <SerializationProvider manager={serializationManager}>
          <ContentSecurityPolicy />
          <GraphQL client={graphQLClient}>
            <I18n manager={i18nManager} locale={locale}>
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
