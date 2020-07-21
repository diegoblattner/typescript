/**
 * Use this type to create other types
 */
export type Opaque<K, T> = T & { __TYPE__: K };

/**
 * String in the form of '284b2a29-423c-4b0b-9149-32cfbc451547'
 */
export type Uuid = Opaque<'Uuid', string>;

/**
 * String in the form of '2019-12-05T11:12:47.513Z'
 */
export type DateISO = Opaque<'DateISO', string>;

export type InferableFunction = (...args: any) => any;

export type ResolveType<T extends InferableFunction> = ReturnType<T> extends Promise<infer P> ? P : ReturnType<T>;


// to utility types

interface Person {
  id: Uuid;
}
