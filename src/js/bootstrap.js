import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueCookie from 'vue-cookie';
import Request from '../utilities/Request';
require('bootstrap');
require('../libs/swotch/scotchPanels');
window.Vue = Vue;
window.axios = axios;

Vue.use(VueRouter);
Vue.use(VueCookie);

window.$baseUrl = 'http://test.xxx';

window.Request = Request;