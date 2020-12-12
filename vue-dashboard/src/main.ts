import Vue from 'vue';
import App from './app-test/App.vue';
import router from './app-test/router';
import 'bulma/css/bulma.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
