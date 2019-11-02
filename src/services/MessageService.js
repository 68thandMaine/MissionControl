import Api from './api';

export default class MessageService {
// Return all messages from the server
  static getMessages() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Api().get('/message');
        /** I don't understand why this code exists. What is the purpose of mapping each object?
         * delete this comment after you understand why you use map
         * instead of returning the database info  */

        const { data } = res;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static deleteMessage(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const deleted = await Api().delete(`/message/${id}`);
        resolve(deleted);
      } catch (err) {
        reject(err);
      }
    });
  }


}
