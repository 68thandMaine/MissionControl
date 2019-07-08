import Vue from 'vue';
// import BootstrapVue from 'bootstrap-vue';

// Font awesome install
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusCircle, faCat, faEnvelope, faPortrait,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './routes/router';
import store from '../store/store';
import auth from './auth';
import './registerServiceWorker';

library.add(faPlusCircle, faCat, faEnvelope, faPortrait);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue.use(BootstrapVue);
Vue.use(auth);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
