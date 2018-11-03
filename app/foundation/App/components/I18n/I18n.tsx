import * as React from 'react';

import {Serialize, WithSerializedValues} from '@shopify/react-serialize-next';
import {Provider, Manager} from '@shopify/react-i18n';
import {Omit} from '@shopify/useful-types';

interface Props {
  manager?: Manager;
  locale: string;
  initialTranslations?: any;
}

interface State {
  manager: Manager;
}

class I18n extends React.Component<Props, State> {
  state: State = {
    manager:
      this.props.manager ||
      new Manager(
        {
          locale: this.props.locale,
        },
        this.props.initialTranslations,
      ),
  };

  render() {
    const {manager} = this.state;
    const {children} = this.props;

    return (
      <>
        <Provider manager={manager}>{children}</Provider>
        <Serialize id="locale" data={() => manager.details.locale} />
      </>
    );
  }
}

export default function ConnectedI18n(
  props: Omit<Props, 'initialTranslations'>,
) {
  type SerializedValues = Pick<Props, 'locale' | 'initialTranslations'>;

  return (
    <WithSerializedValues ids={['locale', 'initialTranslations']}>
      {({locale, initialTranslations}: SerializedValues) => (
        <I18n
          {...props}
          locale={locale || props.locale}
          initialTranslations={initialTranslations}
        />
      )}
    </WithSerializedValues>
  );
}
