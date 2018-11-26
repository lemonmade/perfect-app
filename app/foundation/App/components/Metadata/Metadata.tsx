import * as React from 'react';
import {
  Baseline,
  Responsive,
  AppleHomeScreen,
} from '@shopify/react-app-metadata';

export default function Metadata() {
  return (
    <>
      <Baseline title="Shopify App" />
      <Responsive coverNotch allowPinchToZoom />
      <AppleHomeScreen />
    </>
  );
}
