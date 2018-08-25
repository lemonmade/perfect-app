import * as React from 'react';
import {Event, EventType} from 'types';
import {Scientist, ScientistProvider} from 'context';

export interface Props {
  sources: React.ComponentType[];
}

interface State {
  recording: boolean;
  reveal?: string;
  scientist: Scientist;
}

function send<Type extends EventType>(
  type: Type,
  payload?: Event<Type>['payload'],
) {
  const event = {
    reactSpecimen: true,
    type,
    payload,
  };

  window.postMessage(JSON.stringify(event), '*');
}

export default class Runner extends React.Component<Props, State> {
  state: State = {recording: false, scientist: new Scientist()};

  componentDidMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentDidUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  componentDidUpdate() {
    if (this.state.recording) {
      send(
        EventType.Records,
        [...this.state.scientist.discovered]
          .filter((discovery) => discovery.isLeaf)
          .map((discovery) => discovery.toSpecimen()),
      );

      this.setState({recording: false});
    }

    if (this.state.reveal) {
      send(EventType.Revealed, this.state.reveal);
    }
  }

  render() {
    const {recording, scientist, reveal} = this.state;

    if (recording) {
      const contents = this.props.sources.map((Source, index) => (
        <Source key={index} />
      ));

      return (
        <ScientistProvider value={scientist}>{contents}</ScientistProvider>
      );
    }

    if (reveal) {
      const found = [...scientist.discovered].find(({id}) => reveal === id);
      return found ? found.content : null;
    }

    return null;
  }

  private handleMessage = (message: MessageEvent) => {
    const event: Event = JSON.parse(message.data);

    switch (event.type) {
      case EventType.Start:
        this.setState({
          recording: true,
          reveal: undefined,
          scientist: new Scientist(),
        });
        break;
      case EventType.Reveal:
        this.setState({reveal: event.payload});
        break;
    }
  };
}
