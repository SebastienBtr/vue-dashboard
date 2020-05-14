import Vue from 'vue';
import App from './example/App.vue';
import router from './example/router';
import HeaderItems from './example/components/HeaderItems.vue';
import SidebarHeader from './example/components/SidebarHeader.vue';
import SidebarItems from './example/components/SidebarItems.vue';
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
