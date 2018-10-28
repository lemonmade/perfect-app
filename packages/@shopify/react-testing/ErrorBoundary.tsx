import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  componentDidCatch(error: Error) {
    this.setState({error});
  }

  render() {
    return this.props.children;
  }
}
