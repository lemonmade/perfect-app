import * as React from 'react';
import {Data, Serialization, Manager as SerializationManager} from './types';
import {getSerializedFromNode, ATTRIBUTE} from './utilities';
import Serialize from './Serialize';

export class NoopManager implements SerializationManager {
  set() {}
  get<T>(): T | undefined {
    return undefined;
  }
}

export class ServerManager implements SerializationManager {
  private serializations = new Map<string, Data>();

  set(id: string, data: Data) {
    this.serializations.set(id, data);
  }

  get<T>(id: string): T | undefined {
    return this.serializations.get(id);
  }

  extract(): Serialization[] {
    return [...this.serializations.entries()].map(([id, data]) => ({
      id,
      data,
    }));
  }

  toElements() {
    return this.extract().map(({id, data}) => (
      <Serialize key={id} id={id} data={data} />
    ));
  }
}

export class BrowserManager implements SerializationManager {
  private serializations = createSerializationsMap();

  set() {}

  get<T>(id: string): T | undefined {
    return this.serializations.get(id);
  }
}

function createSerializationsMap() {
  const serializations = new Map<string, Data>();

  if (typeof document === 'undefined') {
    return serializations;
  }

  for (const node of document.querySelectorAll(`[${ATTRIBUTE}]`)) {
    serializations.set(
      node.getAttribute(ATTRIBUTE)!,
      getSerializedFromNode(node),
    );
  }

  return serializations;
}
