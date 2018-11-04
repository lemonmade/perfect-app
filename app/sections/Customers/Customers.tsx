import * as React from 'react';
import {Switch, Route, RouteComponentProps} from 'react-router';

import {NotFound} from 'components';
import {CustomerList, CustomerDetails} from './components';

export default function Customers() {
  return (
    <Switch>
      <Route path="/customers" exact component={CustomerList} />
      <Route path="/customers/new" exact component={CustomerDetails} />
      <Route
        exact
        path="/customers/:id"
        render={({
          match: {
            params: {id},
          },
        }: RouteComponentProps<{id: string}>) => (
          <CustomerDetails key={id} id={id} />
        )}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
