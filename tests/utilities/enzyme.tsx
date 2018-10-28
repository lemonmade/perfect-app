import * as React from 'react';
import {mount, MountRendererProps} from 'enzyme';
import {ErrorBoundary} from '@shopify/react-testing';
import {createPolarisContext, polarisContextTypes} from '@shopify/polaris';

export * from '@shopify/enzyme-utilities';

export function mountWithAppContext(element: React.ReactElement<any>) {
  return mount(<AppContext>{element}</AppContext>);
}

interface Props {
  children: React.ReactNode;
}

class AppContext extends React.Component<Props> {
  static childContextTypes = {...polarisContextTypes};

  getChildContext() {
    return createPolarisContext();
  }

  render() {
    return <ErrorBoundary>{this.props.children}</ErrorBoundary>;
  }
}
