import Vue from 'vue';
import VueDashboard from 'vue-dashboard-vd';
import App from './App.vue';
import router from './router';
// import 'vue-dashboard-vd/dist/vue-dashboard-vd.css';
import 'bulma/css/bulma.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import HeaderItems from './components/HeaderItems.vue';
import SidebarHeader from './components/SidebarHeader.vue';
import SidebarItems from './components/SidebarItems.vue';

Vue.config.productionTip = false;

Vue.component('header-items', HeaderItems);
Vue.component('sidebar-items', SidebarItems);
Vue.component('sidebar-header', SidebarHeader);

Vue.use(VueDashboard);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
