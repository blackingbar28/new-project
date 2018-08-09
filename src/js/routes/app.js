import VueRouter from 'vue-router';
import Dashboard from '../components/dashboard/Index';
import LoginAdmin from '../components/admin/Login';

import Actor from '../components/admin/actor/Actor'
import OverView from '../components/admin/overview/OverView'
import Film from '../components/admin/films/Film'
import WatchVideo from '../components/main_video/MainStream'
import Error404 from '../components/404/Index'

let routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'home'
  },
  {
    path: '/category/:category',
    component: Dashboard,
    name: 'category',
    prop: true
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
    path: '/category/:category/:film',
    name: 'watch_video',
    component: WatchVideo
  },
  {
    path: '/error404',
    name: 'error404',
    component: Error404
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
