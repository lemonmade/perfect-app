import * as React from 'react';
import {Manager} from './types';

const {Provider, Consumer} = React.createContext<Manager | undefined>(
  undefined,
);

interface Props {
  manager?: Manager;
  children: React.ReactNode;
}

function NetworkManagerProvider({manager, children}: Props) {
  return manager ? (
    <Provider value={manager}>{children}</Provider>
  ) : (
    <>{children}</>
  );
}

export {NetworkManagerProvider as Provider, Consumer};
