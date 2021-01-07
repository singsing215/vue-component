<template>
  <div class="app-wrapper" :class="classObj">
    <Headbar/>
    <div class="main">
      <sidebar class="sidebar-container"></sidebar>
      <div class="main-container">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
import { Sidebar, AppMain, Headbar } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  components: {
    Sidebar,
    AppMain,
    Headbar
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
