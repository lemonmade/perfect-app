import * as React from 'react';
import {getSerialized} from './utilities';

interface Props<T> {
  id: string;
  children(data?: T): React.ReactNode;
}

interface State<T> {
  data?: T;
}

export default class WithSerializedValue<T> extends React.Component<
  Props<T>,
  State<T>
> {
  state = {
    data:
      typeof document === 'undefined'
        ? undefined
        : getSerialized<T>(this.props.id),
  };

  render() {
    return this.props.children(this.state.data);
  }
}
