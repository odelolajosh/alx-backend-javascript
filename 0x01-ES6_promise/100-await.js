import { uploadUser, createUser } from './utils';

export default async function asyncUploadUser() {
  let res;
  try {
    const user = await createUser();
    const photo = await uploadUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
