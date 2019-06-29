import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import MessageModule from './modules/MessageModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    message: MessageModule,
  },
});
