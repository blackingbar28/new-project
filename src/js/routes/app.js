import VueRouter from 'vue-router';
import Dashboard from '../components/dashboard/Index';
import LoginAdmin from '../components/admin/Login';

import Actor from '../components/admin/actor/Actor'
import OverView from '../components/admin/overview/OverView'
import Film from '../components/admin/films/Film'
import Link from '../components/admin/link/Link'
import WatchVideo from '../components/main_video/MainStream'
import ActorsFrontEnd from '../components/Actor/Actor';
import ActorFilm from '../components/ActorFilm/ActorFilm';
import Search from '../components/Search/Search'
import Category from '../components/Category/Category'

import Error404 from '../components/404/Index'

let routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'home'
  },
  {
    path: '/category/:category',
    component: Category,
    name: 'category',
    prop: true
  },
  {
      path: '/login',
      component: LoginAdmin
  },
  {
    path: '/admin/actor',
    component: Actor
  },
  {
    path: '/admin/overview',
    component: OverView
  },
  {
    path: '/admin/film',
    component: Film
  },
  {
    path: '/admin/link',
    component: Link
  },
  {
    path: '/category/:category/:film',
    name: 'watch_video',
    component: WatchVideo
  },
  {
    path: '/actors',
    name: 'actors',
    component: ActorsFrontEnd
  },
  {
    path: '/actor/:name',
    name: 'actor_film',
    component: ActorFilm,
    props: true
  },
  {
    path: '/search/:film',
    name: 'search',
    component: Search,
    props: true
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
