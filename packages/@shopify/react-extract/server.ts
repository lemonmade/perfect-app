import {ReactElement} from 'react';
import reactTreeWalker from 'react-tree-walker';
import {isExtractable} from './extractable';

const defaultContext = {
  reactExtractRunning: true,
};

export default function extract(app: ReactElement<any>, include?: string[]) {
  return reactTreeWalker(
    app,
    (_, instance) => {
      return isExtractable(instance)
        ? instance.extract(include || true)
        : undefined;
    },
    {...defaultContext},
  );
}
