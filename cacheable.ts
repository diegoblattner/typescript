import { InferableFunction, ResolveType } from "./types";

/**
 * Caches a function call
 * @param cachedFn the function to be cached
 */
export const cacheable = <T extends InferableFunction>(
  cachedFn: T,
) => {
  let cache;

  return async (...args: Parameters<T>): Promise<ResolveType<T>> => {
    if (cache) {
      return cache;
    }

    cache = await cachedFn(...args);

    return cache;
  };
};


// go to HOC
