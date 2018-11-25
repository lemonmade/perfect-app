import {Context} from 'koa';
import {Header} from '@shopify/network';
import Assets, {Asset} from './assets';

export {Assets, Asset};

export interface State {
  assets: Assets;
}

export interface Options {
  cdn: string;
}

export function middleware({cdn}: Options) {
  return async function sewingKitMiddleware(
    ctx: Context,
    next: () => Promise<any>,
  ) {
    ctx.state.assets = new Assets({cdn, userAgent: ctx.get(Header.UserAgent)});
    await next();
  };
}
