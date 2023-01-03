export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
