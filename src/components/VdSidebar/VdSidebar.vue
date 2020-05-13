<template>
  <div class="vd-sidebar-container" :class="{hidden: !isVisible}">
    <button
        class="button is-white close-btn is-large is-pulled-right"
        v-if="showCloseButton"
        v-on:click="closeSidebar"
      >X</button>
    <div class="vd-sidebar-content">
      <p>test</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class VdSidebar extends Vue {
  @Prop({ default: true }) private isVisible!: boolean;

  @Prop({ default: false }) private showCloseButton!: boolean;

  closeSidebar() {
    this.$emit('close-sidebar');
  }
}
</script>

<style lang="scss" scoped>
.close-btn {
  background-color: transparent !important;
}
.vd-sidebar-container {
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: #f8f8f8;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
  overflow-y: scroll;
  transition: all 0.5s;
  -webkit-transition: all 0.25s;
}
.vd-sidebar-container.hidden {
  left: -300px;
  opacity: 0;
}
.vd-sidebar-content {
  padding: 1.5rem 1.5rem 0rem 1.5rem;
  width: 300px;
  height: 500vh; /* test */
}
</style>
