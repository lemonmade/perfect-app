import * as React from 'react';
import {Extract} from '@shopify/react-extract';

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
        <Extract kind={EXTRACT_ID}>
          {() => {
            withManager(manager);
          }}
        </Extract>
      )}
    </Consumer>
  );
}
