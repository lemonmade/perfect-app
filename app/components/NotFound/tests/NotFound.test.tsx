import * as React from 'react';
import {withIgnoredReactLogs} from '@shopify/react-testing';
import {mountWithAppContext} from 'tests/utilities';

function MyComponent() {
  throw new Error('whoops');
  return null;
}

describe('<NotFound />', () => {
  it('throws', async () => {
    const myComponent = await withIgnoredReactLogs(() =>
      mountWithAppContext(<MyComponent />),
    );

    expect(myComponent).toHaveThrownErrorDuringRender();
  });
});
