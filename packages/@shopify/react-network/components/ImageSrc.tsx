import * as React from 'react';
import {CspDirective} from '@shopify/network';
import NetworkComponent from './NetworkComponent';

interface Props {
  sources: string[];
}

export default function ImageSrc({sources}: Props) {
  return (
    <NetworkComponent
      withManager={(manager) => {
        manager.addCspDirective(CspDirective.ImgSrc, sources);
      }}
    />
  );
}
