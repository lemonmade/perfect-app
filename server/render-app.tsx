import {resolve} from 'path';
import * as React from 'react';
import {Context} from 'koa';
import {readJSONSync} from 'fs-extra';
import {renderToStaticMarkup} from 'react-dom/server';
import {getDataFromTree} from 'react-apollo';

import {Html, DOCTYPE} from '@shopify/react-html-next';
import {
  SerializeData,
  Manager as SerializationManager,
} from '@shopify/react-serialize-next';
import extract from '@shopify/react-extract/server';
import {ServerManager, StatusCode, Header} from '@shopify/react-network';
import {getTranslationsFromTree} from '@shopify/react-i18n';

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

  const networkManager = new ServerManager();
  const serializationManager = new SerializationManager();
  const locale = 'en';

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
  const translations = await getTranslationsFromTree(app);

  ctx.body =
    DOCTYPE +
    renderToStaticMarkup(
      <Html
        locale={locale}
        scripts={scripts}
        styles={css}
        bodyMarkup={
          <>
            <SerializeData id="initialTranslations" data={translations} />
            {serializationManager.toElements()}
          </>
        }
        // eslint-disable-next-line no-process-env
        hideForInitialLoad={Boolean(process.env.NODE_ENV === 'development')}
      >
        {app}
      </Html>,
    );

  const {status, csp} = networkManager.extract();
  const cspHeader = Object.entries(csp)
    .map(([key, sources]) => `${key} ${sources.join(' ')}`)
    .join('; ');

  ctx.set(Header.ContentSecurityPolicy, cspHeader);
  ctx.status = status || StatusCode.Ok;
}
