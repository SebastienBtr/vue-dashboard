<template>
  <div class="vd-header-container">
    <div class="vd-header">
      <button
        class="button is-white menu-btn is-large"
        v-if="showMenuButton"
        v-on:click="openMenu"
      >|||</button>
      <component :is="items" class="is-pulled-right"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class VdHeader extends Vue {
  @Prop({ default: false }) private showMenuButton!: boolean;

  @Prop() private items!: string;

  openMenu() {
    this.$emit('open-menu');
  }
}
</script>

<style lang="scss" scoped>
.menu-btn {
  background-color: transparent !important;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
}
.vd-header-container {
  z-index: 50;
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
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
}
@media screen and (max-width: 1200px) {
  .vd-header-container {
    width: 100%;
  }
}
</style>
