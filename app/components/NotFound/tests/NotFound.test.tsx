import * as React from 'react';
import {mountWithAppContext} from 'tests/utilities';

function MyComponent() {
  throw new Error('whoops');
  return null;
}

describe('<NotFound />', () => {
  it('throws', () => {
    const myComponent = mountWithAppContext(<MyComponent />);
    expect(myComponent).toHaveThrownErrorDuringRender();
  });
});
