import VueRouter from 'vue-router';
import Dashboard from '../components/dashboard/Index';
import LoginAdmin from '../components/admin/Login';

import Actor from '../components/admin/actor/Actor'
import OverView from '../components/admin/overview/OverView'
import Film from '../components/admin/films/Film'

let routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
      path: '/login',
      component: LoginAdmin
  },
  {
    path: '/actor',
    component: Actor
  },
  {
    path: '/overview',
    component: OverView
  },
  {
    path: '/film',
    component: Film
  },
  {
    path: '*',
    redirect: '/'
  }
];

let router = new VueRouter({
  mode: 'history',

  routes

});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if (Vue.cookie.get('token')) {
    //   return next();
    // }
    // return next({
    //   path: '/login',
    //   query: { redirect: to.fullPath }
    // });
  }
  return next();
});

export default router;
