import * as React from 'react';
import {Query} from 'react-apollo';

import {withI18n, WithI18nProps} from '@shopify/react-i18n';
import compose from '@shopify/react-compose';
import {Page, Card, ResourceList, Avatar} from '@shopify/polaris';

import en from './translations/en.json';
import customerListQuery from './graphql/CustomerListQuery.graphql';

function CustomerList({i18n}: WithI18nProps) {
  return (
    <Page title={i18n.translate('title')}>
      <Query query={customerListQuery}>
        {({data, networkStatus}) => {
          const customers = data.customers
            ? data.customers.edges.map(({node}) => node)
            : [];

          return (
            <Card>
              <ResourceList
                items={customers}
                renderItem={(customer) => (
                  <ResourceList.Item
                    id={customer.id}
                    url={urlForCustomer(customer)}
                    media={<Avatar customer />}
                  >
                    {customer.displayName}
                  </ResourceList.Item>
                )}
              />
            </Card>
          );
        }}
      </Query>
    </Page>
  );
}

function urlForCustomer({id}: any) {
  return `/customer/${id.split('/').pop()}`;
}

export default compose<{}>(
  withI18n({
    id: 'CustomerList',
    async translations(locale) {
      if (locale === 'fr') {
        const language = await import('./translations/fr.json');
        return language.default;
      }
    },
    fallback: en,
  }),
)(CustomerList);
