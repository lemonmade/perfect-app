import '@shopify/polyfills/baseline';
import '@shopify/polyfills/intl';
import '@shopify/polyfills/url';

import * as React from 'react';
import {hot} from 'react-hot-loader';

import ApolloClient from 'apollo-client';

import {StaticRouter, BrowserRouter} from 'react-router-dom';

import {AppProvider} from '@shopify/polaris';
import {
  Manager as HtmlManager,
  Provider as HtmlProvider,
} from '@shopify/react-html-next';
import {
  Manager as NetworkManager,
  Provider as NetworkProvider,
} from '@shopify/react-network';

import Link from '../Link';
import Routes from '../Routes';

import {ContentSecurityPolicy, Metadata, GraphQL, I18n} from './components';

interface Props {
  locale?: string;
  server?: boolean;
  location?: string;
  graphQLClient?: ApolloClient<unknown>;
  networkManager?: NetworkManager;
  htmlManager?: HtmlManager;
}

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<Props> {
  render() {
    const {
      server,
      location,
      graphQLClient,
      networkManager,
      htmlManager = new HtmlManager(),
      locale = 'en',
    } = this.props;

    const Router = server && location ? StaticRouter : BrowserRouter;

    return (
      <NetworkProvider manager={networkManager}>
        <HtmlProvider manager={htmlManager}>
          <ContentSecurityPolicy />
          <Metadata />
          <GraphQL client={graphQLClient}>
            <I18n locale={locale}>
              <AppProvider linkComponent={Link}>
                <Router location={location} context={{}}>
                  <Routes />
                </Router>
              </AppProvider>
            </I18n>
          </GraphQL>
        </HtmlProvider>
      </NetworkProvider>
    );
  }
}

export default hot(module)(App);
