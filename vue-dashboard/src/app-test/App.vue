<template>
  <div id="app">
    <VdDashboard
      pageBackground="#f8f8f8"
      sidebarHeaderHeight="175px"
      headerBackground="white"
      sidebarBackground="white"
    >
      <template v-slot:main-content>
        <router-view />
      </template>
      <template v-slot:header-content>
        <HeaderItems></HeaderItems>
      </template>
      <template v-slot:sidebar-header>
        <SidebarHeader></SidebarHeader>
      </template>
      <template v-slot:sidebar-content>
        <SidebarItems></SidebarItems>
      </template>
    </VdDashboard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VdDashboard from '../components/VdDashboard/VdDashboard.vue';
import HeaderItems from './components/HeaderItems.vue';
import SidebarHeader from './components/SidebarHeader.vue';
import SidebarItems from './components/SidebarItems.vue';

@Component({
  components: {
    VdDashboard,
    HeaderItems,
    SidebarHeader,
    SidebarItems,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.title {
  margin-top: 15px;
}
</style>
