<template>
  <div class="header">
    <img src="@/assets/logo.png" class="logo">
    <h1 class="title">Vue Dashboard</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SidebarHeader extends Vue {}
</script>

<style lang="scss">
.header {
  text-align: center;
  padding: 1rem;
}
.logo {
  width: 80px;
}
</style>
