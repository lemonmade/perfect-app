import {Context} from 'koa';
import {Header, StatusCode, CspDirective} from '@shopify/network';
import {Manager} from './manager';

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

export function applyToContext<T extends Context>(
  ctx: T,
  manager: ServerManager,
) {
  const {status, csp} = manager.extract();
  const cspHeader = Object.entries(csp)
    .map(([key, sources]) => `${key} ${sources.join(' ')}`)
    .join('; ');

  ctx.set(Header.ContentSecurityPolicy, cspHeader);
  ctx.status = status || StatusCode.Ok;

  return ctx;
}
