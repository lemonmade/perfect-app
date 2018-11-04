import * as React from 'react';
import {METHOD_NAME, Extractable} from './extractable';

interface Props {
  kind?: symbol;
  extract(): void;
}

export default class Extract extends React.PureComponent<Props>
  implements Extractable {
  [METHOD_NAME](include: true | symbol[]) {
    const {kind, extract} = this.props;

    if (include === true) {
      extract();
      return;
    }

    if (kind != null && include.includes(kind)) {
      extract();
    }
  }

  render() {
    return this.props.children || null;
  }
}
