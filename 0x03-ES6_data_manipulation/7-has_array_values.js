export default function hasValuesFromArray(set = new Set(), array = []) {
  return array.every((elem) => set.has(elem));
}
