import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res;
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
