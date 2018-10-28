import * as React from 'react';

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

import {ContentSecurityPolicy} from './components';

import Link from '../Link';
import Routes from '../Routes';

interface Props {
  locale?: string;
  networkManager?: NetworkManager;
  serializationManager?: SerializationManager;
}

interface Serialized {
  locale: string;
  initialTranslations: {[key: string]: any};
}

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<Props> {
  render() {
    const {networkManager, serializationManager, locale = 'en'} = this.props;

    return (
      <NetworkProvider manager={networkManager}>
        <SerializationProvider manager={serializationManager}>
          <ContentSecurityPolicy />
          <WithSerializedValues<Serialized>
            ids={['initialTranslations', 'locale']}
          >
            {({initialTranslations, locale: serializedLocale = locale}) => (
              <>
                <I18nProvider
                  manager={
                    new I18nManager(
                      {locale: serializedLocale},
                      initialTranslations,
                    )
                  }
                >
                  <AppProvider linkComponent={Link}>
                    <Routes />
                  </AppProvider>
                </I18nProvider>
                <Serialize id="locale" data={() => serializedLocale} />
              </>
            )}
          </WithSerializedValues>
        </SerializationProvider>
      </NetworkProvider>
    );
  }
}
