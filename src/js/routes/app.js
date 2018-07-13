import VueRouter from 'vue-router';
import Dashboard from '../components/dashboard/Index';


let routes = [
  {
    path: '/',
    component: Dashboard
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
