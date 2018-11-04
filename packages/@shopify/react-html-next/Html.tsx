import * as React from 'react';
import Helmet from 'react-helmet';
import {renderToString} from 'react-dom/server';

import {Manager as SerializationManager} from '@shopify/react-serialize-next';

import {Script, Style} from './components';

export interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}

export interface Asset {
  path: string;
  integrity?: string;
}

export interface Props {
  children: React.ReactElement<any>;
  locale?: string;
  styles?: Asset[];
  blockingScripts?: Asset[];
  scripts?: Asset[];
  headData?: {[id: string]: any};
  headMarkup?: React.ReactNode;
  bodyMarkup?: React.ReactNode;
  serializationManager?: SerializationManager;
  hideForInitialLoad?: boolean;
}

export default function Html({
  children,
  locale = 'en',
  blockingScripts = [],
  scripts = [],
  styles = [],
  headMarkup = null,
  bodyMarkup = null,
  serializationManager,
  hideForInitialLoad,
}: Props) {
  const markup = renderToString(children);
  const helmet = Helmet.renderStatic();

  const htmlAttributes = helmet.htmlAttributes.toComponent();
  const bodyAttributes = helmet.bodyAttributes.toComponent();

  const serializationMarkup = serializationManager
    ? serializationManager.toElements()
    : null;

  const stylesMarkup = styles.map((style) => {
    return (
      <Style
        key={style.path}
        href={style.path}
        integrity={style.integrity}
        crossOrigin="anonymous"
      />
    );
  });

  const blockingScriptsMarkup = blockingScripts.map((script) => {
    return (
      <Script
        key={script.path}
        src={script.path}
        integrity={script.integrity}
        crossOrigin="anonymous"
      />
    );
  });

  const deferredScriptsMarkup = scripts.map((script) => {
    return (
      <Script
        key={script.path}
        src={script.path}
        integrity={script.integrity}
        crossOrigin="anonymous"
        defer
      />
    );
  });

  const bodyStyles = hideForInitialLoad ? {display: 'none'} : undefined;

  return (
    <html lang={locale} {...htmlAttributes}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.script.toComponent()}
        {helmet.link.toComponent()}

        {stylesMarkup}
        {headMarkup}
        {blockingScriptsMarkup}
      </head>

      <body {...bodyAttributes} style={bodyStyles}>
        <div id="app" dangerouslySetInnerHTML={{__html: markup}} />

        {bodyMarkup}
        {serializationMarkup}
        {deferredScriptsMarkup}
      </body>
    </html>
  );
}
