import 'raf/polyfill';
import * as Enzyme from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({adapter: new Adapter()});
