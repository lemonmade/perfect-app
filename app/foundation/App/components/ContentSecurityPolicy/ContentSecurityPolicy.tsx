import * as React from 'react';
import {
  DefaultSrc,
  StyleSrc,
  ImageSrc,
  SpecialSource,
} from '@shopify/react-network';

export default function ContentSecurityPolicy() {
  return (
    <>
      <DefaultSrc sources={[SpecialSource.Self, 'localhost:8080']} />
      <ImageSrc
        sources={[SpecialSource.Self, 'localhost:8080', SpecialSource.Data]}
      />
      <StyleSrc sources={[SpecialSource.UnsafeInline]} />
    </>
  );
}
