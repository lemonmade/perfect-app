import * as React from 'react';
import {NoopManager} from './manager';
import {Manager} from './types';

const {Provider, Consumer} = React.createContext<Manager>(new NoopManager());

interface Props {
  manager?: Manager;
  children: React.ReactNode;
}

function SerializationManagerProvider({manager, children}: Props) {
  return manager ? (
    <Provider value={manager}>{children}</Provider>
  ) : (
    <>{children}</>
  );
}

export {SerializationManagerProvider as Provider, Consumer};
