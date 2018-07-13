import Vue from 'vue';
import './bootstrap';
import router from './routes/app';

Vue.config.productionTip = false;

const initApp = new Vue({
  el: '#app',

  router
});