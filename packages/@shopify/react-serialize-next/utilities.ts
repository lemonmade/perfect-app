export const ATTRIBUTE = 'data-serialized-id';

export function getSerialized<Data = {}>(id: string): Data | undefined {
  const node = document.querySelector(`[${ATTRIBUTE}=${id}]`);
  if (node == null) {
    return undefined;
  }

  return getSerializedFromNode<Data>(node);
}

export function getAllSerialized<Data = {}>(ids: string[]): Partial<Data> {
  const nodes = [...document.querySelectorAll(`[${ATTRIBUTE}]`)];

  return ids.reduce<{[key: string]: any}>((data, id) => {
    const node = nodes.find((node) => node.getAttribute(ATTRIBUTE) === id);
    return {...data, [id]: node && getSerializedFromNode(node)};
  }, {}) as Data;
}

export function getSerializedFromNode<Data>(node: Element): Data | undefined {
  const value = node.textContent;
  return value ? JSON.parse(value) : undefined;
}

export function serializedID(id: string) {
  return `SerializedData-${id}`;
}
