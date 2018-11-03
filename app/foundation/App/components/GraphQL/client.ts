import ApolloClient from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';

export interface Options {
  shop?: string;
  server?: boolean;
  accessToken?: string;
  initialData?: NormalizedCacheObject;
}

export default function createGraphQLClient({
  shop,
  server,
  initialData,
  accessToken,
}: Options) {
  const cache = new InMemoryCache({
    dataIdFromObject: (object) => object.id,
  });

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
  };

  if (accessToken) {
    headers['X-Shopify-Access-Token'] = accessToken;
  }

  const link = createHttpLink({
    credentials: 'include',
    uri: shop && accessToken ? `https://${shop}/admin/api/graphql` : '/graphql',
    headers,
  });

  return new ApolloClient({
    link,
    ssrMode: server,
    ssrForceFetchDelay: 100,
    cache: initialData ? cache.restore(initialData) : cache,
    connectToDevTools: !server && process.env.NODE_ENV === 'development',
  });
}
