import * as React from 'react';

import {AppProvider} from '@shopify/polaris';
import {
  Manager as NetworkManager,
  Provider as NetworkProvider,
} from '@shopify/react-network';

import {ContentSecurityPolicy} from './components';

import Link from '../Link';
import Routes from '../Routes';

interface Props {
  networkManager?: NetworkManager;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<Props> {
  render() {
    const {networkManager} = this.props;

    return (
      <NetworkProvider manager={networkManager}>
        <ContentSecurityPolicy />
        <AppProvider linkComponent={Link}>
          <Routes />
        </AppProvider>
      </NetworkProvider>
    );
  }
}
