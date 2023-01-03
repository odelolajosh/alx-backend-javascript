export default function cleanSet(set = new Set(), startString = '') {
  if (startString.length === 0) {
    return startString;
  }
  const cleanArr = [];
  const offset = startString.length;
  set.forEach((val) => {
    const value = String(val);
    if (value.startsWith(startString)) {
      cleanArr.push(value.substring(offset));
    }
  });
  return cleanArr.join('-');
}
