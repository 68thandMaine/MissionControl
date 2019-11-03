/* eslint-disable no-param-reassign */
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
    loadMessages({ commit }, data) {
      commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 1);
      return MessageService.getMessages(data).then((res) => {
        commit(mutations.SET_MESSAGESARRAY, res);
        commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 2);
      }).catch(() => {
        commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 3);
      });
    },
    selectMessage({ commit, state }, data) {
      commit(mutations.SET_MESSAGE_LOAD_STATUS, 2);
      const message = state.messagesArray.find(msg => msg.id === data);
      commit(mutations.SET_MESSAGE, message);
    },
    removeMessage({ commit, state }, id) {
      return MessageService.deleteMessage(id).then(() => {
        const messages = state.messagesArray.filter(message => message.id !== id);
        commit(mutations.SET_MESSAGESARRAY, messages);
        commit(mutations.SET_MESSAGE, null);
      }).catch(() => {
        commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 3);
      });
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
      state.messagesArray.filter(message => message.opened === false);
    },
    getRepliedMessages: (state) => {
      state.messagesArray.filter(message => message.replied === true);
    },
  },
};

export default messageModule;
