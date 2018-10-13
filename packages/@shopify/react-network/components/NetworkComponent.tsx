import * as React from 'react';
import {Extract} from '@shopify/react-extract';

import {Consumer} from '../context';
import {Manager} from '../Manager';

interface Props {
  withManager(manager: Manager): void;
}

export default function NetworkComponent({withManager}: Props) {
  if (typeof window !== 'undefined') {
    return null;
  }

  return (
    <Consumer>
      {(manager) => (
        <Extract>
          {() => {
            withManager(manager);
          }}
        </Extract>
      )}
    </Consumer>
  );
}
