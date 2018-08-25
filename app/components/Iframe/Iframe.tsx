import * as React from 'react';

export interface Props {
  port?: number;
}

export default class SpecimenIframe extends React.Component<Props> {
  private iframe = React.createRef<HTMLIFrameElement>();

  componentDidMount() {
    const {
      iframe: {current: iframe},
    } = this;

    if (iframe == null) {
      return;
    }

    window.addEventListener('message', (event) => {
      console.log(event);
    });
  }

  render() {
    const {port = 3000} = this.props;
    return (
      <iframe
        ref={this.iframe}
        title="Specimen viewer"
        src={`http://localhost:${port}`}
      />
    );
  }
}
