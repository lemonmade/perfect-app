import * as React from 'react';
import {StatusCode} from '@shopify/network';
import NetworkComponent from './NetworkComponent';

interface Props {
  url: string;
  status?: StatusCode;
}

export default function Redirect({url, status}: Props) {
  return (
    <NetworkComponent
      withManager={(manager) => {
        manager.redirectTo(url, status);
      }}
    />
  );
}
