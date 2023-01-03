export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const typedArray = new Int8Array(length);
  typedArray[position] = value;
  return new DataView(typedArray.buffer);
}
