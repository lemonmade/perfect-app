import * as React from 'react';
import {Context} from 'koa';
import {resolve} from 'path';
import {readJSONSync} from 'fs-extra';
import {renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import {Html, DOCTYPE} from '@shopify/react-html-next';
import {Serializer} from '@shopify/react-serialize-next';
import extract from '@shopify/react-extract/server';
import {ServerManager, StatusCode, Header} from '@shopify/react-network';
import {getTranslationsFromTree} from '@shopify/react-i18n';

import {vendorBundleUrl} from '../config/server';
import App from '../app';

const assetsPath = resolve(__dirname, '../build/client/assets.json');

export default async function renderApp(ctx: Context) {
  const {js, css} = readJSONSync(assetsPath).entrypoints.main;
  const scripts =
    // eslint-disable-next-line no-process-env
    process.env.NODE_ENV === 'development'
      ? [{path: vendorBundleUrl}, ...js]
      : js;

  const networkManager = new ServerManager();
  const locale = 'fr';

  const app = (
    <StaticRouter location={ctx.request.url} context={{}}>
      <App networkManager={networkManager} locale={locale} />
    </StaticRouter>
  );

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
            <Serializer id="locale">{locale}</Serializer>
            <Serializer id="initialTranslations">{translations}</Serializer>
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
