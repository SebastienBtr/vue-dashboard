<template>
  <div id="app">
    <vd-dashboard
      content="router-view"
      sidebarHeaderHeight="175px"
      headerItems="header-items"
      sidebarHeader="sidebar-header"
      sidebarItems="sidebar-items"
      pageBackground="#f8f8f8"
      headerBackground="white"
      sidebarBackground="white"
    ></vd-dashboard>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.title {
  margin-top: 15px;
}
</style>
