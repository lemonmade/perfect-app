import * as React from 'react';
import {Effect} from '@shopify/react-effect';
import {Consumer} from '../context';
import {EFFECT_ID} from '../utilities';

type Props = React.HTMLProps<HTMLMetaElement>;

export const EXTRACT_ID = Symbol('html');

export default class Meta extends React.PureComponent<Props> {
  private removeMeta?: () => void;

  componentWillUnmount() {
    if (this.removeMeta) {
      this.removeMeta();
    }
  }

  render() {
    return (
      <Consumer>
        {(manager) => (
          <Effect
            key={JSON.stringify(this.props)}
            kind={EFFECT_ID}
            perform={() => {
              if (this.removeMeta) {
                this.removeMeta();
              }

              this.removeMeta = manager.addMeta(this.props);
            }}
          />
        )}
      </Consumer>
    );
  }
}
