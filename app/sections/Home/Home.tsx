import * as React from 'react';
import {Page, Link} from '@shopify/polaris';

export default function Home() {
  return (
    <Page title="Home">
      <Link url="/customers">Customers</Link>
    </Page>
  );
}
