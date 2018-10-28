import * as React from 'react';
import {METHOD_NAME, Extractable} from './extractable';

interface Props {
  kind?: symbol;
  children(): void;
}

export default class Extract extends React.PureComponent<Props>
  implements Extractable {
  [METHOD_NAME](include: true | symbol[]) {
    const {kind, children} = this.props;

    if (include === true) {
      children();
      return;
    }

    if (kind != null && include.includes(kind)) {
      children();
    }
  }

  render() {
    return null;
  }
}
