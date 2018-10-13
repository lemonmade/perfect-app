import {ReactElement, Component} from 'react';
import reactTreeWalker from 'react-tree-walker';

const defaultContext = {
  reactExtractRunning: true,
};

const METHOD_NAME = 'extract';

export default function extract(app: ReactElement<any>) {
  return reactTreeWalker(app, visitor, {...defaultContext});
}

function visitor(_: ReactElement<any>, instance: Component<any> | null) {
  return isExtractable(instance) ? instance.extract() : undefined;
}

interface Extractable {
  extract(): void;
}

function isExtractable(instance: any): instance is Extractable {
  return instance != null && typeof instance[METHOD_NAME] === 'function';
}
