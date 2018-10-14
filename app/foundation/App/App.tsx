import * as React from 'react';

import {AppProvider} from '@shopify/polaris';
import {WithSerializedValues} from '@shopify/react-serialize-next';
import {
  Manager as NetworkManager,
  Provider as NetworkProvider,
} from '@shopify/react-network';
import {
  Manager as I18nManager,
  Provider as I18nProvider,
} from '@shopify/react-i18n';

import {ContentSecurityPolicy} from './components';

import Link from '../Link';
import Routes from '../Routes';

interface Props {
  locale?: string;
  networkManager?: NetworkManager;
}

interface Serialized {
  locale: string;
  initialTranslations: {[key: string]: any};
}

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<Props> {
  render() {
    const {networkManager, locale = 'en'} = this.props;

    return (
      <NetworkProvider manager={networkManager}>
        <ContentSecurityPolicy />
        <WithSerializedValues<Serialized>
          ids={['initialTranslations', 'locale']}
        >
          {({initialTranslations, locale: serializedLocale}) => (
            <I18nProvider
              manager={
                new I18nManager(
                  {locale: serializedLocale || locale},
                  initialTranslations,
                )
              }
            >
              <AppProvider linkComponent={Link}>
                <Routes />
              </AppProvider>
            </I18nProvider>
          )}
        </WithSerializedValues>
      </NetworkProvider>
    );
  }
}
