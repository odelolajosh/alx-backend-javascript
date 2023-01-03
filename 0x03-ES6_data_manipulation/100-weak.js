/** A weak map of endpoints to number of times they've been accessed */
export const weakMap = new WeakMap();

/**
 * Query an API endpoint
 * @param {string} endpoint
 */
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count += 1);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
