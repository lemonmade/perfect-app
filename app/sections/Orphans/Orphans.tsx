import * as React from 'react';
import {Effect} from '@shopify/react-effect';
import {createSerializer} from '@shopify/react-html';

import {Store} from 'redux';
import {Provider, connect} from 'react-redux';

import createStore, {setName} from './store';

type StoreShape<T> = T extends Store<infer U> ? U : never;

const {Serialize, WithSerialized} = createSerializer('redux');

const ReduxUser = connect(
  ({person}: StoreShape<ReturnType<typeof createStore>>) => ({
    name: person.name,
  }),
)(({name}: {name: string}) => <div>Hello, {name}</div>);

export default function Orphans() {
  return (
    <WithSerialized>
      {(initialData) => {
        const store = createStore(initialData);

        return (
          <Provider store={store}>
            <>
              <Effect perform={() => store.dispatch(setName('Chris'))} />
              <ReduxUser />
              <Serialize data={() => store.getState()} />
            </>
          </Provider>
        );
      }}
    </WithSerialized>
  );
}
