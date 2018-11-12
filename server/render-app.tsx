/* eslint no-process-env: off */

import * as React from 'react';
import {Context} from 'koa';
import {getDataFromTree} from 'react-apollo';

import extract from '@shopify/react-effect/server';
import {Html, render} from '@shopify/react-html-next/server';
import {ServerManager, applyToContext} from '@shopify/react-network/server';

import {Manager as SerializationManager} from '@shopify/react-serialize-next';
import {Manager as I18nManager} from '@shopify/react-i18n-next';
import {State as SewingKitState} from '@shopify/sewing-kit-server';

import App, {createGraphQLClient} from '../app';

export default async function renderApp(ctx: Context) {
  const {assets} = ctx.state as SewingKitState;

  const locale = 'fr';
  const i18nManager = new I18nManager({locale});
  const networkManager = new ServerManager();
  const serializationManager = new SerializationManager();

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
      i18nManager={i18nManager}
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
