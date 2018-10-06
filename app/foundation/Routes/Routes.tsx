import * as React from 'react';
import {Switch, Route} from 'react-router';
import {Products} from 'sections';
import {NotFound} from 'components';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Products} />
      <Route component={NotFound} />
    </Switch>
  );
}
