<template>
  <div class="vd-header-container" :style="mapCssProps">
    <div class="vd-header">
      <button class="menu-btn" v-if="showMenuButton" @click="openMenu">
        |||
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class VdHeader extends Vue {
  @Prop({ default: false }) private showMenuButton!: boolean;

  @Prop({ default: '#f8f8f8' }) private pageBackground!: string;

  @Prop({ default: 'white' }) private background!: string;

  @Prop({ default: '300px' }) private sidebarWidth!: string;

  get mapCssProps() {
    const result: Record<string, string> = {};
    result['--vd-page-background'] = this.pageBackground;
    result['--vd-header-background'] = this.background;
    result['--vd-sidebar-width'] = this.sidebarWidth;
    return result;
  }

  openMenu() {
    this.$emit('open-menu');
  }
}
</script>

<style lang="scss" scoped>
$sidebarWidth: var(--vd-sidebar-width, 300px);

.menu-btn {
  background-color: transparent !important;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  font-size: 2rem;
  border: none;
  cursor: pointer;
  height: 100%;
  float: left;
  margin-left: 1.5rem;
}
.vd-header-container {
  z-index: 30;
  position: fixed;
  top: 0;
  width: -webkit-calc(100% - $sidebarWidth);
  width: -moz-calc(100% - $sidebarWidth);
  width: calc(100% - $sidebarWidth);
  background-color: var(--vd-page-background, white);
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}
.vd-header {
  height: 4rem;
  background-color: var(--vd-header-background, white);
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
}
@media screen and (max-width: 1200px) {
  .vd-header-container {
    width: 100%;
  }
}
</style>
