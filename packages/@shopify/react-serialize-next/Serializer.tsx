import * as React from 'react';
import serialize from 'serialize-javascript';
import {ATTRIBUTE} from './utilities';

interface Props {
  id: string;
  children: any;
}

export default function Serializer({id, children}: Props) {
  return (
    <script
      type="text/json"
      dangerouslySetInnerHTML={{__html: serialize(children)}}
      {...{[ATTRIBUTE]: id}}
    />
  );
}
