import Vue from 'vue';
import './bootstrap';
import router from './routes/app';
import './config';

Vue.config.productionTip = false;

const initApp = new Vue({
  el: '#app',

  router
});