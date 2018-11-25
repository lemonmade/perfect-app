import {getSerializationsFromDocument} from './utilities';

interface Title {
  title: string;
}

export interface State {
  title?: string;
}

interface Subscription {
  (state: State): void;
}

export default class Manager {
  private isServer = typeof document === 'undefined';
  private serializations = getSerializationsFromDocument();
  private titles: Title[] = [];
  private subscriptions = new Set<Subscription>();

  get state() {
    const lastTitle = this.titles[this.titles.length - 1];

    return {
      title: lastTitle && lastTitle.title,
    };
  }

  subscribe(subscription: Subscription) {
    this.subscriptions.add(subscription);
  }

  addTitle(title: string) {
    const titleObject = {title};
    this.titles.push(titleObject);
    this.updateSubscriptions();
    return this.removeTitle.bind(this, titleObject);
  }

  setSerialization(id: string, data: unknown) {
    if (this.isServer) {
      this.serializations.set(id, data);
    }
  }

  getSerialization<T>(id: string): T | undefined {
    return this.serializations.get(id) as T | undefined;
  }

  extract() {
    return {
      ...this.state,
      serializations: [...this.serializations.entries()].map(([id, data]) => ({
        id,
        data,
      })),
    };
  }

  private updateSubscriptions() {
    for (const subscription of this.subscriptions) {
      subscription(this.state);
    }
  }

  private removeTitle(title: Title) {
    const index = this.titles.indexOf(title);
    if (index >= 0) {
      this.titles.splice(index, 1);
      this.updateSubscriptions();
    }
  }
}
