import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import axios from 'axios';
import VueCookie from 'vue-cookie';
import Request from '../utilities/Request';
require('bootstrap');
require('../libs/swotch/scotchPanels');
window.Vue = Vue;
window.axios = axios;

Vue.use(VueHead)
Vue.use(VueRouter);
Vue.use(VueCookie);

// window.$baseUrl = 'https://dea4914e.ngrok.io';
window.$baseUrl = 'http://anime.xxx';

window.Request = Request;