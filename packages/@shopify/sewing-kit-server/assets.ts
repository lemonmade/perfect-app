import {resolve} from 'path';
import {readJSON} from 'fs-extra';
import {matchesUA} from 'browserslist-useragent';

export interface Asset {
  path: string;
  integrity?: string;
}

interface Entrypoint {
  js: Asset[];
  css: Asset[];
}

interface AssetList {
  entrypoints: {[key: string]: Entrypoint};
}

interface TargetManifest {
  name: string;
  browsers?: string | string[];
  manifest: AssetList;
}

type ConsolidatedManifest = TargetManifest[];

interface Options {
  cdn: string;
  userAgent?: string;
}

export default class Assets {
  private cdn: string;
  private userAgent?: string;
  private resolvedAssetList?: AssetList;

  constructor({cdn, userAgent}: Options) {
    this.cdn = cdn;
    this.userAgent = userAgent;
  }

  async scripts({name = 'main'} = {}) {
    const {js} = getAssetsForEntrypoint(name, await this.getAssetList());

    const scripts =
      // eslint-disable-next-line no-process-env
      process.env.NODE_ENV === 'development'
        ? [{path: `${this.cdn}dll/vendor.js`}, ...js]
        : js;

    return scripts;
  }

  async styles({name = 'main'} = {}) {
    const {css} = getAssetsForEntrypoint(name, await this.getAssetList());
    return css;
  }

  private async getAssetList() {
    if (this.resolvedAssetList) {
      return this.resolvedAssetList;
    }

    const manifest = await loadManifest();

    if (manifest.length === 0) {
      throw new Error('No builds were found.');
    }

    const {userAgent} = this;

    if (userAgent == null) {
      this.resolvedAssetList = manifest[manifest.length - 1].assets;
    } else if (manifest.length === 1) {
      this.resolvedAssetList = manifest[0].assets;
    } else {
      this.resolvedAssetList = (
        manifest.find(
          ({browsers}) =>
            browsers == null ||
            matchesUA(userAgent, {
              browsers,
              ignoreMinor: true,
              ignorePatch: true,
              allowHigherVersions: true,
            }),
        ) || manifest[0]
      ).assets;
    }

    return this.resolvedAssetList;
  }
}

let manifestPromise: Promise<ConsolidatedManifest> | null = null;

function loadManifest() {
  if (manifestPromise) {
    return manifestPromise;
  }

  manifestPromise = readJSON(
    resolve(__dirname, '../../../build/client/assets.json'),
  );

  return manifestPromise;
}

export function clearCache() {
  manifestPromise = null;
}

function getAssetsForEntrypoint(name: string, {entrypoints}: AssetList) {
  if (!entrypoints.hasOwnProperty(name)) {
    throw new Error(
      `No entrypoints found with the name '${name}'. Available entrypoints: ${Object.keys(
        entrypoints,
      ).join(', ')}`,
    );
  }

  return entrypoints[name];
}
