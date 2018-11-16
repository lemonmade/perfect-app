import {
  createStore as createReduxStore,
  combineReducers,
  Action,
  compose,
} from 'redux';

const SET_NAME = 'SET_NAME';

const reducer = combineReducers({
  person(state = {name: 'Unknown'}, action: Action) {
    return isSetNameAction(action) ? {name: action.name} : state;
  },
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware =
  typeof window === 'undefined'
    ? undefined
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

export default function createStore(initialData: object = {}) {
  return createReduxStore(reducer, initialData, middleware);
}

export function setName(name: string) {
  return {type: SET_NAME, name};
}

function isSetNameAction(action: Action): action is ReturnType<typeof setName> {
  return action.type === SET_NAME;
}
