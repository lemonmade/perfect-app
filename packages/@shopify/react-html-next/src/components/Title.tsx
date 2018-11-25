import * as React from 'react';
import {Effect} from '@shopify/react-effect';
import {Consumer} from '../context';

interface Props {
  children: string;
}

export const EXTRACT_ID = Symbol('html');

export default class Title extends React.PureComponent<Props> {
  private removeTitle?: () => void;

  componentWillUnmount() {
    if (this.removeTitle) {
      this.removeTitle();
    }
  }

  render() {
    const {children: title} = this.props;

    return (
      <Consumer>
        {(manager) => (
          <Effect
            key={title}
            kind={EXTRACT_ID}
            perform={() => {
              if (this.removeTitle) {
                this.removeTitle();
              }

              this.removeTitle = manager.addTitle(title);
            }}
          />
        )}
      </Consumer>
    );
  }
}
