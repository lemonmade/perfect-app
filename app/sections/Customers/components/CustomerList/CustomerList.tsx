import * as React from 'react';

import {Query} from '@shopify/react-apollo';
import {withI18n, WithI18nProps} from '@shopify/react-i18n-next';
import compose from '@shopify/react-compose';
import {Page, Card, ResourceList, Avatar} from '@shopify/polaris';
import {parseGid, nodesFromEdges} from '@shopify/admin-graphql-api-utilities';

import en from './translations/en.json';

import customerListQuery, {
  CustomerListQueryData,
} from './graphql/CustomerListQuery.graphql';

interface State {
  selectedCustomers: string[] | 'All';
}

class CustomerList extends React.PureComponent<WithI18nProps, State> {
  state: State = {selectedCustomers: []};

  render() {
    const {i18n} = this.props;

    return (
      <Page
        title={i18n.translate('title')}
        primaryAction={{
          content: i18n.translate('primaryAction'),
          url: '/customers/new',
        }}
      >
        <Query query={customerListQuery}>
          {({data}) => {
            const customers =
              data && data.customers
                ? nodesFromEdges(data.customers.edges)
                : [];

            return (
              <Card>
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
        </Query>
      </Page>
    );
  }
}

function urlForCustomer({id}: CustomerListQueryData.CustomersEdgesNode) {
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
