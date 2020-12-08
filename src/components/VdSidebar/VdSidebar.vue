<template>
  <div
    class="vd-sidebar-container"
    :class="{hidden: !isVisible}"
    :style="mapCssProps"
  >
    <div class="vd-sidebar-header" :class="{hidden: !isVisible}">
      <button
        class="button is-white close-btn is-large"
        v-if="showCloseButton"
        @click="closeSidebar"
      >X</button>
      <component :is="header"></component>
    </div>
    <div class="vd-sidebar-content">
      <component :is="items"></component>
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

  @Prop() private header!: string;

  @Prop() private items!: string;

  get mapCssProps() {
    const result: Record<string, string> = {};
    result['--vd-header-height'] = this.headerHeight;
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
  background-color: white;
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
  right: 0;
  top: 0;
  background-color: transparent !important;
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
