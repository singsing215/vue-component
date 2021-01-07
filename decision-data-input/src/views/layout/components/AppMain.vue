<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive :exclude="exclude">
      <!-- <router-view :key="key"></router-view> -->
      <router-view></router-view>
      </keep-alive>
    </transition>
    <Rule v-show="$route.path == '/rule/index'"></Rule>
  </section>
</template>
<script>
import Rule from '@/views/rule'
import bus from '@/utils/bus'
export default {
  name: 'AppMain',
  components:{
    Rule
  },
  data(){
    return {
    }
  },
  mounted(){
  },
  methods:{
  },
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // },
    exclude(){
      return this.$store.state.globalData.exclude;
    }
  },
}
</script>
