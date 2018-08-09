import Vue from 'vue';
import './bootstrap';
import router from './routes/app';
import './config';

Vue.config.productionTip = false;

const initApp = new Vue({
  el: '#app',

  router,
  created() {

    // Add a response interceptor
    axios.interceptors.response.use((response) => {
      return response;
    }, (error) => {


      // if (error.response.status !== 401) {
      //   this.$notify({
      //     group: 'notification',
      //     title: this.$t('error'),
      //     text: error.response.data.message,
      //     type: 'error',
      //     duration: 5000
      //   });
      // }

      if (error.response.status === 401) {
        this.$cookie.delete('token');
        this.$cookie.delete('user_info');
        this.$router.push('/login');
      }

      if (error.response.status === 404) {
        console.log(123);
        this.$router.push('/error404');
      }

      return Promise.reject(error);
    });
  },
});