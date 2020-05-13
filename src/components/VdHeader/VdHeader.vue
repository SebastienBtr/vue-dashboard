<template>
  <div class="vd-header-container">
    <div class="vd-header"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class VdHeader extends Vue {}
</script>

<style lang="scss" scoped>
.vd-header-container {
  position: fixed;
  top: 0;
  width: -webkit-calc(100% - 300px);
  width: -moz-calc(100% - 300px);
  width: calc(100% - 300px);
  background-color: #f8f8f8;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}
.vd-header {
  height: 4rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
}
</style>
