// Support type
type ArrayDictionary<T> = { [key: string]: T[] };

// True type
export type ObjectDictionary<T> = { [key: string]: T };
export type Dictionary<T> = T extends []
? ArrayDictionary<T>
: ObjectDictionary<T>;

