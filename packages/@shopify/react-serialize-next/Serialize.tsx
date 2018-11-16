import * as React from 'react';
import serialize from 'serialize-javascript';
import {ATTRIBUTE} from './utilities';

interface Props {
  id: string;
  data: any;
}

export default function Serialize({id, data}: Props) {
  return (
    <script
      type="text/json"
      dangerouslySetInnerHTML={{__html: serialize(data)}}
      {...{[ATTRIBUTE]: id}}
    />
  );
}
