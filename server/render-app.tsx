/* eslint no-process-env: off */

import * as React from 'react';
import {Context} from 'koa';
import {getDataFromTree} from 'react-apollo';

import {extract} from '@shopify/react-effect/server';
import {Html, render} from '@shopify/react-html-next/server';
import {ServerManager, applyToContext} from '@shopify/react-network/server';

import {ServerManager as ServerSerializationManager} from '@shopify/react-serialize-next';
import {State as SewingKitState} from '@shopify/sewing-kit-server';

import App, {createGraphQLClient} from '../app';

export default async function renderApp(ctx: Context) {
  const {assets} = ctx.state as SewingKitState;

  const locale = 'fr';
  const networkManager = new ServerManager();
  const serializationManager = new ServerSerializationManager();

  // We would like to push this one into the App, but for now
  // it can’t because we don’t serialize until `extract`, at which
  // point we have a different client than the one that was "filled"
  // in getDataFromTree(). Moving `getDataFromTree()` would probably
  // solve this...
  const graphQLClient = createGraphQLClient({
    server: true,
    shop: process.env.SHOP_HOST,
    accessToken: process.env.SHOPIFY_PASSWORD,
  });

  const app = (
    <App
      server
      locale={locale}
      location={ctx.request.url}
      graphQLClient={graphQLClient}
      networkManager={networkManager}
      serializationManager={serializationManager}
    />
  );

  await getDataFromTree(app);
  await extract(app);

  applyToContext(ctx, networkManager);

  ctx.body = render(
    <Html
      locale={locale}
      styles={await assets.styles()}
      scripts={await assets.scripts()}
      serializationManager={serializationManager}
      hideForInitialLoad={Boolean(process.env.NODE_ENV === 'development')}
    >
      {app}
    </Html>,
  );
}
