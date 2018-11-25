import * as React from 'react';
import Manager, {State} from './manager';

const {Provider, Consumer} = React.createContext<Manager>(new Manager());

interface Props {
  manager?: Manager;
  children: React.ReactNode;
}

class HtmlManagerProvider extends React.Component<Props> {
  private queuedUpdate?: ReturnType<typeof requestAnimationFrame>;

  componentDidMount() {
    const {manager} = this.props;

    if (manager) {
      manager.subscribe((state) => {
        if (this.queuedUpdate) {
          cancelAnimationFrame(this.queuedUpdate);
        }
        this.queuedUpdate = requestAnimationFrame(() => {
          updateOnClient(state);
        });
      });
    }
  }

  render() {
    const {manager, children} = this.props;

    return manager ? (
      <Provider value={manager}>{children}</Provider>
    ) : (
      <>{children}</>
    );
  }
}

function updateOnClient(state: State) {
  const {title} = state;
  let titleElement = document.querySelector('title');

  if (title == null) {
    if (titleElement) {
      titleElement.remove();
    }

    return;
  }

  if (titleElement == null) {
    titleElement = document.createElement('title');
    document.head.appendChild(titleElement);
  }

  titleElement.textContent = title;
}

export {HtmlManagerProvider as Provider, Consumer};
