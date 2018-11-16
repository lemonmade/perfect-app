import {createStore as createReduxStore, combineReducers, Action} from 'redux';

const SET_NAME = 'SET_NAME';

const reducer = combineReducers({
  person(state = {name: 'Unknown'}, action: Action) {
    return isSetNameAction(action) ? {name: action.name} : state;
  },
});

export default function createStore(initialData: object = {}) {
  return createReduxStore(reducer, initialData);
}

export function setName(name: string) {
  return {type: SET_NAME, name};
}

function isSetNameAction(action: Action): action is ReturnType<typeof setName> {
  return action.type === SET_NAME;
}
