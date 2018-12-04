import * as React from 'react';

import {withI18n, WithI18nProps} from '@shopify/react-i18n';
import {Title} from '@shopify/react-html-next';
import compose from '@shopify/react-compose';
import {Page, Card, ResourceList, Avatar} from '@shopify/polaris';
import {parseGid, nodesFromEdges} from '@shopify/admin-graphql-api-utilities';

import CustomerListQuery from '../CustomerListQuery';

import en from './translations/en.json';

interface State {
  selectedCustomers: string[] | 'All';
}

class CustomerList extends React.PureComponent<WithI18nProps, State> {
  state: State = {selectedCustomers: []};

  render() {
    const {i18n} = this.props;

    return (
      <>
        <Title>{i18n.translate('title')}</Title>
        <Page
          title={i18n.translate('title')}
          breadcrumbs={[{content: 'Home', url: '/'}]}
          primaryAction={{
            content: i18n.translate('primaryAction'),
            url: '/customers/new',
          }}
        >
          <CustomerListQuery>
            {({data, loading}) => {
              const customers =
                data && data.customers
                  ? nodesFromEdges(data.customers.edges)
                  : [];

              const keepFresh = loading ? null : (
                <CustomerListQuery.KeepFresh />
              );

              return (
                <Card>
                  {keepFresh}
                  <ResourceList
                    items={customers}
                    selectedItems={this.state.selectedCustomers}
                    bulkActions={[{content: 'Delete', onAction: () => {}}]}
                    onSelectionChange={(selectedCustomers) =>
                      this.setState({selectedCustomers})
                    }
                    renderItem={(customer) => (
                      <ResourceList.Item
                        id={`Customer${parseGid(customer.id)}`}
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
          </CustomerListQuery>
        </Page>
      </>
    );
  }
}

function urlForCustomer({id}: {id: string}) {
  return `/customers/${parseGid(id)}`;
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
