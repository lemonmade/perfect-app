import * as React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

export {default as Html} from './Html';

export function render(tree: React.ReactElement<unknown>) {
  return `<!DOCTYPE html>${renderToStaticMarkup(tree)}`;
}
