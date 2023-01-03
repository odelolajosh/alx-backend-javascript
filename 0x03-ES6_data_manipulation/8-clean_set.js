export default function cleanSet(set = new Set(), startString = '') {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return startString;
  }
  const cleanArr = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanArr.push(value.substring(startString.length));
    }
  });
  return cleanArr.join('-');
}
