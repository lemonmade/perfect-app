import * as React from 'react';
import {Data, Serialization, Manager as SerializationManager} from './types';
import SerializeData from './SerializeData';

export default class Manager implements SerializationManager {
  private serializations: Serialization[] = [];

  add(id: string, data: Data) {
    this.serializations.push({id, data});
  }

  extract() {
    return this.serializations;
  }

  toElements() {
    return this.serializations.map(({id, data}) => (
      <SerializeData key={id} id={id} data={data} />
    ));
  }
}
