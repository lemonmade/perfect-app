import * as React from 'react';

import {createSerializer} from '@shopify/react-serialize-next';
import {Provider, Manager} from '@shopify/react-i18n-next';
import {Omit} from '@shopify/useful-types';

interface Props {
  locale: string;
  initialTranslations?: any;
}

interface State {
  manager: Manager;
}

interface Data {
  locale: string;
  translations: ReturnType<Manager['extract']>;
}

const {Serialize, WithSerialized} = createSerializer<Data>('i18n');

class I18n extends React.Component<Props, State> {
  state: State = {
    manager: new Manager(
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
        <Serialize
          data={() => ({
            locale: manager.details.locale,
            translations: manager.extract(),
          })}
        />
      </>
    );
  }
}

export default function ConnectedI18n(
  props: Omit<Props, 'initialTranslations'>,
) {
  return (
    <WithSerialized>
      {(data) => {
        const locale = data ? data.locale : props.locale;
        const translations = data && data.translations;

        return (
          <I18n
            {...props}
            locale={locale || props.locale}
            initialTranslations={translations}
          />
        );
      }}
    </WithSerialized>
  );
}
