import Api from './api';

export default class MessageService {


  static getMessages() {
    return new Promise(async (resolve, reject ) => {
      try {
        const res = await Api().get('messages');
        console.log(res);
        /** I don't understand why this code exists. What is the purpose of mapping each object?
         * Uncomment the code out after you understand why you use map instead of returning the database info  */

        // const { data } = res;
        // resolve(
        //   data.map(message => ({
        //     ...message,
        //   }));
        // );
      } catch (err) {
        console.log(err);
        // reject(err)
      }
    });
  }
}
