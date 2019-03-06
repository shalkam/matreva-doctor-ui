import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';

export const cache = new InMemoryCache();

// Set up cache persistence.
export const persistor = new CachePersistor({
  cache,
  storage: window.localStorage,
  key: 'churro.agent'
});
