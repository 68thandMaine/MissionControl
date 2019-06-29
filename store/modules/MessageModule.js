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
    message: {},

    messagesArrayLoadStatus: 0,
    messageLoadStatus: 0,
  },
  actions: {
    loadMessages({ commit, state, dispatch }, data) {
      commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 1);
      return MessageService.getMessages(data).then((res) => {
        commit(mutations.SET_MESSAGESARRAY, res);
        commit(mutations.SET_MESSAGESARRAY_LOAD_STATUS, 2);
      }).catch((err) => {
        console.log('loadMessages error: ', err);
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
    }
  },
  getters: {
    getMessages(state) {
      return state.messagesArray;
    },
  },
};

export default messageModule;
