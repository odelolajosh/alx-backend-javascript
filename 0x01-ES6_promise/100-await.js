import { uploadUser, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadUser(user);
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
