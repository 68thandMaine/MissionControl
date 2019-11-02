import Api from './api';

export default class ProfileService {
  static createProfile(profile) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Api().post('/profile', { profile });
        const { data } = res;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}
