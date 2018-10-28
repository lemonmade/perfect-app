import * as React from 'react';
import {Extract} from '@shopify/react-extract';
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
          <Extract kind={EXTRACT_ID}>{() => manager.add(id, data())}</Extract>
        ) : null
      }
    </Consumer>
  );
}
