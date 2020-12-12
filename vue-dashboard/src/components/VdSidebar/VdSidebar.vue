<template>
  <div
    class="vd-sidebar-container"
    :class="{hidden: !isVisible}"
    :style="mapCssProps"
  >
    <div class="vd-sidebar-header" :class="{hidden: !isVisible}">
      <button
        class="close-btn"
        v-if="showCloseButton"
        @click="closeSidebar"
      >X</button>
      <slot name="header"></slot>
    </div>
    <div class="vd-sidebar-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class VdSidebar extends Vue {
  @Prop({ default: true }) private isVisible!: boolean;

  @Prop({ default: false }) private showCloseButton!: boolean;

  @Prop({ default: '50px' }) private headerHeight!: string;

  @Prop({ default: 'white' }) private background!: string;

  get mapCssProps() {
    const result: Record<string, string> = {};
    result['--vd-header-height'] = this.headerHeight;
    result['--vd-sidebar-background'] = this.background;
    return result;
  }

  closeSidebar() {
    this.$emit('close-sidebar');
  }
}
</script>

<style lang="scss" scoped>
.vd-sidebar-container {
  z-index: 40;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--vd-sidebar-background, white);
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.vd-sidebar-container.hidden {
  left: -300px;
  opacity: 0;
}
.close-btn {
  position: absolute;
  z-index: 200;
  right: 10px;
  top: 0;
  background-color: transparent !important;
  font-size: 2rem;
  border: none;
  cursor: pointer;
}
.vd-sidebar-header {
  z-index: 45;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 300px;
  height: var(--vd-header-height, 50px);
  overflow-y: auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.vd-sidebar-header.hidden {
  left: -300px;
  opacity: 0;
}
.vd-sidebar-content {
  padding: var(--vd-header-height, 50px) 1rem 0rem 1rem;
  width: 300px;
}
</style>
