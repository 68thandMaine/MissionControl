import Vue from 'vue';
import Router from 'vue-router';

// VIEWS
import Dashboard from '../views/Dashboard.vue';
import MessageBox from '../views/MessageBox.vue';
import NotFound from '../components/error_page/NotFound.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
    {
      path: '/callback',
      name: 'callback',
      // route level code-splitting
      // this generates a separate chunk (callback.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "callback" */ '../views/Callback.vue'),
    },
    {
      path: '/newProfile',
      name: 'newProfile',
      component: () => import('../views/forms/ProfileForm.vue'),
    },
    {
      path: '/inbox',
      name: 'messageBox',
      component: MessageBox,
      props: true,
    },

  ],
});

// very basic "setup" of a global guard
// router.beforeEach((to, from, next) => {
//   if (to.name === 'callback') { // check if "to"-route is "callback" and allow access
//     next();
//   } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
//     next();
//   } else { // trigger auth0 login
//     router.app.$auth.login();
//   }
// });


export default router;
