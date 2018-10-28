import 'raf/polyfill';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const IGNORE_ERROR_MESSAGES = [/at mountIndeterminateComponent/];

window.addEventListener('error', (event) => {
  const {error} = event;

  // I want to silence all errors and know what I'm doing
  if (
    error != null &&
    IGNORE_ERROR_MESSAGES.some(
      (ignore) => typeof error.stack === 'string' && ignore.test(error.stack),
    )
  ) {
    event.preventDefault();
  }
});

const IGNORABLE_TEST_ERRORS = [
  // the next line should come with another error
  /The above error occurred in (the <.*>|one of your React) components?:/,
];

/* eslint-disable no-console */
const originalTestConsoleError = console.error.bind(console);
console.error = (...args: any[]) => {
  const [firstArgument] = args;
  if (
    typeof firstArgument === 'string' &&
    IGNORABLE_TEST_ERRORS.some((regex) => regex.test(firstArgument))
  ) {
    return;
  }

  originalTestConsoleError(...args);
};
/* eslint-enable no-console */
