import * as React from 'react';
import {Effect} from '@shopify/react-effect';

import {Consumer} from '../context';
import {Manager} from '../Manager';

interface Props {
  withManager(manager: Manager): void;
}

export const EXTRACT_ID = Symbol('network');

export default function NetworkComponent({withManager}: Props) {
  if (typeof window !== 'undefined') {
    return null;
  }

  return (
    <Consumer>
      {(manager) => (
        <Effect
          serverOnly
          kind={EXTRACT_ID}
          perform={() => withManager(manager)}
        />
      )}
    </Consumer>
  );
}
