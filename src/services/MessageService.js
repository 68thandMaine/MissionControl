import Api from './api';

export default class MessageService {
  static getMessages() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Api().get('/message');
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

  static sendMessage(message) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(message)
        const sent = await Api().put(`/message/${message.id}`);
        // Need to make a web service file next.
      } catch (err) {
        reject(err);
      }
    });
  }
}
