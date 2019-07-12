import MessageService from '../../src/services/MessageService';
import * as mutations from '../mutations/mutation-types';

/** LOAD STATUS EXPLANATION
 * The LoadStatus will equal one of four values:
 *  0: not loading
 *  1: loading
 *  2: loaded
 *  3: error loading
 *
 * I could use these for displaying custom messages.
 * If I don't do that then I should remove this part of state.
 */

const messageModule = {
  state: {
    messagesArray: [],
    message: null,

    messagesArrayLoadStatus: 0,
    messageLoadStatus: 0,
  },
  actions: {
    loadMessages({ commit, state, dispatch }, data) {
      console.log('!!!!!! LOAD MESSAGES HIT !!!!!!');
      commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 1);
      return MessageService.getMessages(data).then((res) => {
        commit(mutations.SET_MESSAGESARRAY, res);
        commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 2);
      }).catch((err) => {
        console.log('loadMessages error: ', err);
        commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 3);
      });
    },
    selectMessage ({commit, state, dispatch}, data) {
      console.log('!!!!!! SELECT MESSAGE HIT !!!!!!');
      commit(mutations.SET_MESSAGE_LOAD_STATUS, 2)
      let message = state.messagesArray.find(message => message.id === data);
      console.log(message);
      commit(mutations.SET_MESSAGE, message)
    },
  },
  mutations: {
    [mutations.SET_MESSAGESARRAY_LOAD_STATUS](state, status) {
      state.messagesArrayLoadStatus = status;
    },
    [mutations.SET_MESSAGESARRAY](state, messagesArray) {
      state.messagesArray = messagesArray;
    },
    [mutations.SET_MESSAGE_LOAD_STATUS](state, status) {
      state.messageLoadStatus = status;
    },
    [mutations.SET_MESSAGE](state, message) {
      state.message = message;
    },
  },
  getters: {
    getUnreadMessages: (state) => {
      return state.messagesArray.filter(message => message.opened === false);
    },
    getRepliedMessages: (state) => {
      return state.messagesArray.filter(message => message.replied === true);
    }
  },
};

export default messageModule;
