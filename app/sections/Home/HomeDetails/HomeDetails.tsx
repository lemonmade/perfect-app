import * as React from 'react';
import {Runner, Example} from 'components';

export interface Props {}

export default class HomeDetails extends React.Component<Props, State> {
  render() {
    return <Runner sources={[Example]} />;
  }
}
