import * as React from 'react';
import {Effect} from '@shopify/react-effect';
import {Consumer} from './context';

interface Props {
  id: string;
  data(): any;
}

export const EXTRACT_ID = Symbol('serialize');

export default function Serialize({id, data}: Props) {
  return (
    <Consumer>
      {(manager) =>
        manager ? (
          <Effect
            serverOnly
            kind={EXTRACT_ID}
            perform={() => manager.add(id, data())}
          />
        ) : null
      }
    </Consumer>
  );
}
