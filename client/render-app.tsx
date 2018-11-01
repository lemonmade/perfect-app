import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

export default function renderApp(
  appContainerElement: HTMLElement | null,
  App: React.ComponentType,
) {
  if (appContainerElement) {
    ReactDOM.hydrate(
      <AppContainer>
        <App />
      </AppContainer>,
      appContainerElement,
    );
  }
}
