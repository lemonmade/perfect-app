import * as React from 'react';
import {getAllSerialized} from './utilities';

interface Props<Data extends {[key: string]: any}> {
  ids: (keyof Data)[];
  children(data: Partial<Data>): React.ReactNode;
}

interface State<Data extends {[key: string]: any}> {
  data: Partial<Data>;
}

export default class WithSerializedValue<
  Data extends {[key: string]: any}
> extends React.Component<Props<Data>, State<Data>> {
  state = {
    data:
      typeof document === 'undefined'
        ? {}
        : getAllSerialized<Data>(this.props.ids as string[]),
  };

  render() {
    return this.props.children(this.state.data);
  }
}
