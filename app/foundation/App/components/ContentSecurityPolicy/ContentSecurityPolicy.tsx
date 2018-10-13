import * as React from 'react';
import {DefaultSrc, StyleSrc, SpecialSource} from '@shopify/react-network';

export default function ContentSecurityPolicy() {
  return (
    <>
      <DefaultSrc sources={[SpecialSource.Self, 'localhost:8080']} />
      <StyleSrc sources={[SpecialSource.UnsafeInline]} />
    </>
  );
}
