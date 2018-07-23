import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Request from '../utilities/Request';

window.Vue = Vue;
window.axios = axios;

Vue.use(VueRouter);

window.$baseUrl = 'http://test.xxx/';

window.Request = Request;