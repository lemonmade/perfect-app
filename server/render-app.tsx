import * as React from 'react';
import {Context} from 'koa';
import {resolve} from 'path';
import {readJSONSync} from 'fs-extra';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';

import Html, {DOCTYPE} from '@shopify/react-html';
import extract from '@shopify/react-extract/server';
import {ServerManager, StatusCode, Header} from '@shopify/react-network';

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
  const app = (
    <StaticRouter location={ctx.request.url} context={{}}>
      <App networkManager={networkManager} />
    </StaticRouter>
  );

  await extract(app);

  ctx.body =
    DOCTYPE +
    renderToString(
      // eslint-disable-next-line react/jsx-pascal-case
      <Html
        scripts={scripts}
        styles={css}
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
