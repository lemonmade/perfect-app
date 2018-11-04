/* eslint no-process-env: off */

import {resolve} from 'path';
import * as React from 'react';
import {Context} from 'koa';
import {readJSONSync} from 'fs-extra';
import {getDataFromTree} from 'react-apollo';

import extract from '@shopify/react-extract/server';
import {Html, render} from '@shopify/react-html-next/server';
import {ServerManager, applyToContext} from '@shopify/react-network/server';

import {Manager as SerializationManager} from '@shopify/react-serialize-next';
import {Manager as I18nManager} from '@shopify/react-i18n-next';

import {vendorBundleUrl} from '../config/server';
import App, {createGraphQLClient} from '../app';

const assetsPath = resolve(__dirname, '../build/client/assets.json');

export default async function renderApp(ctx: Context) {
  const {js, css} = readJSONSync(assetsPath).entrypoints.main;
  const scripts =
    // eslint-disable-next-line no-process-env
    process.env.NODE_ENV === 'development'
      ? [{path: vendorBundleUrl}, ...js]
      : js;

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
      styles={css}
      scripts={scripts}
      serializationManager={serializationManager}
      hideForInitialLoad={Boolean(process.env.NODE_ENV === 'development')}
    >
      {app}
    </Html>,
  );
}
