import {StatusCode, CspDirective} from '@shopify/network';

export interface Manager {
  addStatusCode(statusCode: StatusCode): void;
  addCspDirective(directive: CspDirective, sources: string[]): void;
}

export class ServerManager implements Manager {
  private statusCodes: StatusCode[] = [];
  private csp = new Map<CspDirective, string[]>();

  addStatusCode(statusCode: StatusCode) {
    this.statusCodes.push(statusCode);
  }

  addCspDirective(directive: CspDirective, sources: string[]) {
    this.csp.set(directive, [...(this.csp.get(directive) || []), ...sources]);
  }

  extract() {
    return {
      status:
        this.statusCodes.length > 0
          ? this.statusCodes.reduce((large, code) => Math.max(large, code), 0)
          : undefined,
      csp: [...this.csp.entries()].reduce<{[key: string]: string[]}>(
        (csp, [directive, sources]) => ({...csp, [directive]: sources}),
        {},
      ),
    };
  }
}

export class BrowserManager implements Manager {
  addStatusCode() {}
  addCspDirective() {}
}
