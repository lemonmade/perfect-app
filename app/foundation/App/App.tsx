import * as React from 'react';

import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {StaticRouter, BrowserRouter} from 'react-router-dom';

import {AppProvider} from '@shopify/polaris';
import {
  Serialize,
  WithSerializedValues,
  Manager as SerializationManager,
  Provider as SerializationProvider,
} from '@shopify/react-serialize-next';
import {
  Manager as NetworkManager,
  Provider as NetworkProvider,
} from '@shopify/react-network';
import {
  Manager as I18nManager,
  Provider as I18nProvider,
} from '@shopify/react-i18n';

import Link from '../Link';
import Routes from '../Routes';

import {ContentSecurityPolicy} from './components';
import createGraphQLClient from './graphql/client';

interface Props {
  server?: boolean;
  location?: string;
  locale?: string;
  graphQLClient?: ApolloClient<unknown>;
  networkManager?: NetworkManager;
  serializationManager?: SerializationManager;
}

interface Serialized {
  locale: string;
  apollo: any;
  initialTranslations: {[key: string]: any};
}

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<Props> {
  render() {
    const {
      server,
      location,
      graphQLClient,
      networkManager,
      serializationManager,
      locale = 'en',
    } = this.props;

    return (
      <NetworkProvider manager={networkManager}>
        <SerializationProvider manager={serializationManager}>
          <ContentSecurityPolicy />
          <WithSerializedValues<Serialized>
            ids={['initialTranslations', 'apollo', 'locale']}
          >
            {({
              initialTranslations,
              apollo,
              locale: serializedLocale = locale,
            }) => {
              const Router = server && location ? StaticRouter : BrowserRouter;
              const client =
                graphQLClient ||
                createGraphQLClient({
                  initialData: apollo,
                });

              return (
                <>
                  <ApolloProvider client={client}>
                    <I18nProvider
                      manager={
                        new I18nManager(
                          {locale: serializedLocale},
                          initialTranslations,
                        )
                      }
                    >
                      <AppProvider linkComponent={Link}>
                        <Router location={location} context={{}}>
                          <Routes />
                        </Router>
                      </AppProvider>
                    </I18nProvider>
                  </ApolloProvider>
                  <Serialize id="apollo" data={() => client.extract()} />
                  <Serialize id="locale" data={() => serializedLocale} />
                </>
              );
            }}
          </WithSerializedValues>
        </SerializationProvider>
      </NetworkProvider>
    );
  }
}
