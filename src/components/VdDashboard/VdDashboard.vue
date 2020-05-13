<template>
  <div>
    <vd-sidebar></vd-sidebar>
    <div class="vd-main">
      <vd-header></vd-header>
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
}
</script>

<style lang="scss" scoped>
.vd-main {
  padding-left: 300px
}
.vd-content {
  height: 500vh; /* test */
  padding: 7rem 2rem;
  background-color: #f8f8f8;
}
</style>
