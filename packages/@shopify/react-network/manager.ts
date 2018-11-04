import {StatusCode, CspDirective} from '@shopify/network';

export interface Manager {
  addStatusCode(statusCode: StatusCode): void;
  addCspDirective(directive: CspDirective, sources: string[]): void;
}

export class BrowserManager implements Manager {
  addStatusCode() {}
  addCspDirective() {}
}
