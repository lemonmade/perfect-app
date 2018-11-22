import * as React from 'react';
import {
  DefaultSource,
  StyleSource,
  ImageSource,
  SpecialSource,
} from '@shopify/react-network';

export default function ContentSecurityPolicy() {
  return (
    <>
      <DefaultSource
        sources={[SpecialSource.Self, 'localhost:8080', 'https://*']}
      />
      <ImageSource
        sources={[SpecialSource.Self, 'localhost:8080', SpecialSource.Data]}
      />
      <StyleSource sources={[SpecialSource.UnsafeInline]} />
    </>
  );
}
