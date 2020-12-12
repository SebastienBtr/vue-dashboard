import Vue from 'vue';
import VueDashboard from 'vue-dashboard-vd';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.config.productionTip = false;

Vue.use(VueDashboard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
