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

    const consolidatedManifest = await loadConsolidatedManifest();

    if (consolidatedManifest.length === 0) {
      throw new Error('No builds were found.');
    }

    const {userAgent} = this;

    if (userAgent == null) {
      this.resolvedAssetList =
        consolidatedManifest[consolidatedManifest.length - 1].manifest;
    } else if (consolidatedManifest.length === 1) {
      this.resolvedAssetList = consolidatedManifest[0].manifest;
    } else {
      this.resolvedAssetList = (
        consolidatedManifest.find(
          ({browsers}) =>
            browsers == null ||
            matchesUA(userAgent, {
              browsers,
              ignoreMinor: true,
              ignorePatch: true,
              allowHigherVersions: true,
            }),
        ) || consolidatedManifest[0]
      ).manifest;
    }

    return this.resolvedAssetList;
  }
}

let consolidatedManifestPromise: Promise<ConsolidatedManifest> | null = null;

function loadConsolidatedManifest() {
  if (consolidatedManifestPromise) {
    return consolidatedManifestPromise;
  }

  consolidatedManifestPromise = readJSON(
    resolve(__dirname, '../../../build/client/assets.json'),
  );

  return consolidatedManifestPromise;
}

export function clearCache() {
  consolidatedManifestPromise = null;
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
