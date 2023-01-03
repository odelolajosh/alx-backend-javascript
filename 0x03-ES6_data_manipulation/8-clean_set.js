export default function cleanSet(set = new Set(), startString = '') {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const cleanArr = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubString = value.slice(startString.length);
      if (valueSubString && valueSubString !== value) {
        cleanArr.push(valueSubString);
      }
    }
  });
  return cleanArr.join('-');
}
