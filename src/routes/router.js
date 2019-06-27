import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../components/error_page/NotFound'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
  ],
});

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if (to.name === 'callback') { // check if "to"-route is "callback" and allow access
    next();
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next();
  } else { // trigger auth0 login
    router.app.$auth.login();
  }
});


export default router;
