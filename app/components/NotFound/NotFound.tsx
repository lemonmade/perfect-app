import * as React from 'react';

import {withI18n, WithI18nProps} from '@shopify/react-i18n';
import compose from '@shopify/react-compose';
import {Page, EmptyState} from '@shopify/polaris';
import {Status, StatusCode} from '@shopify/react-network';

import emptyStateIllustration from './illustrations/404.svg';
import en from './translations/en.json';

function NotFound({i18n}: WithI18nProps) {
  return (
    <>
      <Status code={StatusCode.NotFound} />
      <Page title="">
        <EmptyState
          heading={i18n.translate('title')}
          image={emptyStateIllustration}
          action={{content: i18n.translate('action'), url: '/'}}
        >
          <p>{i18n.translate('tip')}</p>
        </EmptyState>
      </Page>
    </>
  );
}

export default compose<{}>(
  withI18n({
    id: 'NotFound',
    async translations(locale) {
      if (locale === 'fr') {
        const language = await import('./translations/fr.json');
        return language.default;
        // return require('./translations/fr.json');
      }
    },
    fallback: en,
  }),
)(NotFound);
