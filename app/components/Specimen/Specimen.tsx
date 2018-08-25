import * as React from 'react';
import {
  Scientist,
  Discovery,
  ScientistConsumer,
  DiscoveryConsumer,
  DiscoveryProvider,
} from 'context';

export interface Props {
  name: string;
  children: React.ReactNode;
}

type ComposedProps = Props & {scientist: Scientist; discovery: Discovery};

class ConnectedSpecimen extends React.Component<ComposedProps> {
  componentDidMount() {
    const {scientist, discovery} = this.props;
    scientist.discover(discovery);
  }

  render() {
    return (
      <DiscoveryProvider value={this.props.discovery}>
        {this.props.children}
      </DiscoveryProvider>
    );
  }
}

export default function Specimen({children, ...props}: Props) {
  return (
    <ScientistConsumer>
      {(scientist) => (
        <DiscoveryConsumer>
          {(discovery) => (
            <ConnectedSpecimen
              discovery={
                new Discovery({...props, content: children}, discovery)
              }
              scientist={scientist}
              {...props}
            >
              {children}
            </ConnectedSpecimen>
          )}
        </DiscoveryConsumer>
      )}
    </ScientistConsumer>
  );
}
