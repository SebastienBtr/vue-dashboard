<template>
  <div>
    <vd-sidebar
      :isVisible="sidebarIsVisible"
      :showCloseButton="isCollapse"
      @close-sidebar="closeSidebar"
      :header="sidebarHeader"
      :items="sidebarItems"
      :headerHeight="sidebarHeaderHeight"
    ></vd-sidebar>
    <div class="vd-main">
      <vd-header
        :showMenuButton="isCollapse"
        @open-menu="openMenu"
        :items="headerItems"
      ></vd-header>
      <div class="vd-content" @click="pageClick">
        <component :is="content"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Watch, Vue,
} from 'vue-property-decorator';
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

  @Prop({ default: '50px' }) private sidebarHeaderHeight!: string;

  @Prop() private headerItems!: string;

  @Prop() private sidebarHeader!: string;

  @Prop() private sidebarItems!: string;

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

  @Watch('$route')
  onRouteChange() {
    this.pageClick();
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

  pageClick() {
    if (this.isCollapse && this.sidebarIsVisible) {
      this.closeSidebar();
    }
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
  padding: 6rem 1.5rem 0rem 1.5rem;
  background-color: #f8f8f8;
  position: absolute;
  min-height: 100%;
  width: -webkit-calc(100% - 300px);
  width: -moz-calc(100% - 300px);
  width: calc(100% - 300px);
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
