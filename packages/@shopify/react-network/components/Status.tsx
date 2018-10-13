import * as React from 'react';
import {StatusCode} from '@shopify/network';
import NetworkComponent from './NetworkComponent';

interface Props {
  code: StatusCode;
}

export default function Status({code}: Props) {
  return (
    <NetworkComponent
      withManager={(manager) => {
        manager.addStatusCode(code);
      }}
    />
  );
}
