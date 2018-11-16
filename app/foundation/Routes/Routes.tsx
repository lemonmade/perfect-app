import * as React from 'react';
import {Switch, Route} from 'react-router';
import {Home, Customers, Orphans} from 'sections';
import {NotFound} from 'components';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/customers" component={Customers} />
      <Route path="/orphans" component={Orphans} />
      <Route component={NotFound} />
    </Switch>
  );
}
