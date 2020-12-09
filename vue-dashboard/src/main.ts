import Vue from 'vue';
import App from './app-test/App.vue';
import router from './app-test/router';
import HeaderItems from './app-test/components/HeaderItems.vue';
import SidebarHeader from './app-test/components/SidebarHeader.vue';
import SidebarItems from './app-test/components/SidebarItems.vue';
import 'bulma/css/bulma.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.config.productionTip = false;

Vue.component('header-items', HeaderItems);
Vue.component('sidebar-items', SidebarItems);
Vue.component('sidebar-header', SidebarHeader);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
