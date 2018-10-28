export const METHOD_NAME = 'extract';

export interface Extractable {
  [METHOD_NAME](include: true | symbol[]): void;
}

export function isExtractable(instance: any): instance is Extractable {
  return instance != null && typeof instance[METHOD_NAME] === 'function';
}
