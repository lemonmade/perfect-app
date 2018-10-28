import * as React from 'react';
import {withI18n, WithI18nProps} from '@shopify/react-i18n';
import compose from '@shopify/react-compose';
import {Page} from '@shopify/polaris';

import en from './translations/en.json';

function ProductDetails({i18n}: WithI18nProps) {
  return (
    <Page title={i18n.translate('title')}>{i18n.translate('content')}</Page>
  );
}

export default compose<{}>(
  withI18n({
    id: 'ProductDetails',
    async translations(locale) {
      if (locale === 'fr') {
        const language = await import('./translations/fr.json');
        return language.default;
      }
    },
    fallback: en,
  }),
)(ProductDetails);
