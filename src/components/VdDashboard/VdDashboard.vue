<template>
  <div>
    <vd-sidebar
      :isVisible="sidebarIsVisible"
      :showCloseButton="isCollapse"
      @close-sidebar="closeSidebar"
    ></vd-sidebar>
    <div class="vd-main">
      <vd-header :showMenuButton="isCollapse" @open-menu="openMenu"></vd-header>
      <component :is="content" class="vd-content"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VdHeader from '../VdHeader/VdHeader.vue';
import VdSidebar from '../VdSidebar/VdSidebar.vue';

@Component({
  components: {
    VdHeader,
    VdSidebar,
  },
})
export default class VdDashboard extends Vue {
  @Prop() private content!: string;

  sidebarIsVisible = true;

  isCollapse = false;

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
    this.onResize();
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    if (window.innerWidth <= 1200) {
      this.sidebarIsVisible = false;
      this.isCollapse = true;
    } else {
      this.sidebarIsVisible = true;
      this.isCollapse = false;
    }
  }

  openMenu() {
    this.sidebarIsVisible = true;
  }

  closeSidebar() {
    this.sidebarIsVisible = false;
  }
}
</script>

<style lang="scss" scoped>
.vd-main {
  padding-left: 300px;
  transition: all 0.5s;
  -webkit-transition: all 0.25s;
}
.vd-content {
  height: 500vh; /* test */
  padding: 7rem 2rem;
  background-color: #f8f8f8;
  position: absolute;
  width: calc(100% - 300px);
  z-index: 10;
}
@media screen and (max-width: 1200px) {
  .vd-main {
    padding-left: 0px;
  }
  .vd-content {
    width: 100%;
  }
}
</style>
