import * as React from 'react';
import {Page} from '@shopify/polaris';

import {createGraphQL, fillGraphQL, mountWithAppContext} from 'tests/utilities';

import {NotFound} from 'components';

import CustomerDetails from '../CustomerDetails';
import customerDetailsQuery from '../graphql/CustomerDetailsQuery.graphql';

jest.mock('components', () => ({
  NotFound() {
    return null;
  },
}));

describe('<CustomerDetails />', () => {
  it('works', async () => {
    const displayName = 'Tobi Lutke';
    const customerDetails = await mountWithAppContext(
      <CustomerDetails id="123" />,
      {
        graphQL: createGraphQL({
          CustomerDetails: fillGraphQL(customerDetailsQuery, {
            customer: {displayName},
          }),
        }),
      },
    );

    expect(customerDetails.find(Page)).toHaveProp('title', displayName);
  });

  it('renders a <NotFound /> when no customer exists', async () => {
    const customerDetails = await mountWithAppContext(
      <CustomerDetails id="123" />,
      {
        graphQL: createGraphQL({
          CustomerDetails: fillGraphQL(customerDetailsQuery, {
            customer: null,
          }),
        }),
      },
    );

    expect(customerDetails.find(Page)).toHaveLength(0);
    expect(customerDetails.find(NotFound)).toHaveLength(1);
  });
});
