import {readJSON} from 'fs-extra';
import {resolve} from 'path';

export interface Asset {
  path: string;
  integrity?: string;
}

interface Entrypoint {
  js: Asset[];
  css: Asset[];
}

interface BundleDependency {
  file: string;
  publicPath: string;
  chunkName: string;
  id?: string;
  name?: string;
}

interface Manifest {
  entrypoints: {[key: string]: Entrypoint};
}

interface AsyncAssestManifest {
  [key: string]: BundleDependency[];
}

let manifestPromise: Promise<Manifest> | null = null;
let asyncAssetsManifestPromise: Promise<AsyncAssestManifest> | null = null;

function loadManifest() {
  if (manifestPromise) {
    return manifestPromise;
  }

  manifestPromise = readJSON(
    resolve(__dirname, '../../../build/client/assets.json'),
  );

  return manifestPromise;
}

function loadAsyncAssetsManifest() {
  if (asyncAssetsManifestPromise) {
    return asyncAssetsManifestPromise;
  }

  asyncAssetsManifestPromise = readJSON(
    resolve(__dirname, '../../../build/client/react-loadable.json'),
  );

  return asyncAssetsManifestPromise;
}

export function clearCache() {
  manifestPromise = null;
  asyncAssetsManifestPromise = null;
}

async function getAssetsForEntrypoint(name: string) {
  const {entrypoints} = await loadManifest();
  if (!entrypoints.hasOwnProperty(name)) {
    throw new Error(
      `No entrypoints found with the name '${name}'. Available entrypoints: ${Object.keys(
        entrypoints,
      ).join(', ')}`,
    );
  }

  return entrypoints[name];
}

export default class Assets {
  private seenAssets = new Set<string>();

  constructor(private cdn: string) {}

  async scripts({name = 'main'} = {}) {
    const {js} = await getAssetsForEntrypoint(name);

    const scripts =
      process.env.NODE_ENV === 'development'
        ? [{path: `${this.cdn}dll/vendor.js`}, ...js]
        : js;

    return this.getUnseenAssets(scripts);
  }

  async styles({name = 'main'} = {}) {
    const {css} = await getAssetsForEntrypoint(name);
    return this.getUnseenAssets(css);
  }

  async getAsyncAssetsManifest() {
    const manifest = await loadAsyncAssetsManifest();
    return manifest;
  }

  private getUnseenAssets(assets: Asset[]) {
    const {seenAssets} = this;
    const unseenAssets = assets.filter((asset) => !seenAssets.has(asset.path));

    for (const asset of unseenAssets) {
      seenAssets.add(asset.path);
    }

    return unseenAssets;
  }
}
