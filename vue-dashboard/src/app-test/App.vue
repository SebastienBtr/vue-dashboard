<template>
  <div id="app">
    <vd-dashboard
      content="router-view"
      sidebarHeaderHeight="175px"
      headerItems="header-items"
      sidebarHeader="sidebar-header"
      sidebarItems="sidebar-items"
    ></vd-dashboard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VdDashboard from '../components/VdDashboard/VdDashboard.vue';

@Component({
  components: {
    VdDashboard,
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
