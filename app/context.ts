import * as React from 'react';
import {Record, Viewport} from 'types';

export class Scientist {
  discovered = new Set<Discovery>();

  discover(discovery: Discovery) {
    this.discovered.add(discovery);
  }
}

interface DiscoveryOptions {
  name: string;
  label?: string;
  description?: string;
  viewport?: Viewport;
  content?: React.ReactNode;
}

export class Discovery {
  get isLeaf() {
    return this.children.length === 0;
  }

  content?: DiscoveryOptions['content'];

  private children: Discovery[] = [];
  private name: string;
  private label?: string;
  private description?: string;
  private viewport?: Viewport;

  get id(): string {
    return this.parent ? `${this.parent.id}-${this.name}` : this.name;
  }

  constructor(
    {name, label, description, viewport, content}: DiscoveryOptions,
    private parent?: Discovery,
  ) {
    this.name = name;
    this.label = label;
    this.description = description;
    this.viewport = viewport;
    this.content = content;

    if (parent) {
      parent.children.push(this);
    }
  }

  toSpecimen(): Record {
    return {
      id: this.id,
      name: this.name,
      label: this.label,
      description: this.description,
      viewport: this.viewport,
      parent: this.parent ? this.parent.id : undefined,
    };
  }
}

const {
  Provider: DiscoveryProvider,
  Consumer: DiscoveryConsumer,
} = React.createContext<Discovery | undefined>(undefined);

const {
  Provider: ScientistProvider,
  Consumer: ScientistConsumer,
} = React.createContext(new Scientist());

export {
  ScientistProvider,
  ScientistConsumer,
  DiscoveryProvider,
  DiscoveryConsumer,
};
