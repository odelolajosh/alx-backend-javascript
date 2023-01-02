export default function uploadPhoto(filename) {
  return new Promise((_resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
