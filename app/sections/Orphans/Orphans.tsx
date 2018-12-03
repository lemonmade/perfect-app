import * as React from 'react';
import {Button} from '@shopify/polaris';
import {Effect} from '@shopify/react-effect';
import {createSerializer, Favicon} from '@shopify/react-html-next';

import {Store} from 'redux';
import {Provider, connect} from 'react-redux';

import createStore, {setName} from './store';
import faviconImage from './images/employee.ico';

interface State {
  favicon: boolean;
}

type StoreShape<T> = T extends Store<infer U> ? U : never;

const {Serialize, WithSerialized} = createSerializer('redux');

const ReduxUser = connect(
  ({person}: StoreShape<ReturnType<typeof createStore>>) => ({
    name: person.name,
  }),
)(({name}: {name: string}) => <div>Hello, {name}</div>);

export default class Orphans extends React.Component<{}, State> {
  state: State = {favicon: false};

  render() {
    const {favicon} = this.state;

    return (
      <WithSerialized>
        {(initialData) => {
          const store = createStore(initialData);
          const faviconMarkup = favicon ? (
            <Favicon source={faviconImage} />
          ) : null;

          return (
            <>
              <Button
                onClick={() =>
                  this.setState(({favicon}) => ({favicon: !favicon}))
                }
              >
                Toggle favicon
              </Button>
              {faviconMarkup}
              <Provider store={store}>
                <>
                  <Effect perform={() => store.dispatch(setName('Chris'))} />
                  <ReduxUser />
                  <Serialize data={() => store.getState()} />
                </>
              </Provider>
            </>
          );
        }}
      </WithSerialized>
    );
  }
}
