import * as React from 'react';

interface Props {
  children(): void;
}

export default class Extract extends React.PureComponent<Props> {
  extract() {
    this.props.children();
  }

  render() {
    return null;
  }
}
