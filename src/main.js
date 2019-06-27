import Vue from 'vue';
// import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './routes/router';
import store from '../store/store';
import auth from './auth';
import './registerServiceWorker';

// Vue.use(BootstrapVue);
Vue.use(auth);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
