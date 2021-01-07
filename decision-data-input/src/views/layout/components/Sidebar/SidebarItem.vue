<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
      <div v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" @click="go(item.path+'/'+item.children[0].path, item.children[0].name)" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <!-- <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon> -->
          <i v-if="item.children[0].meta&&item.children[0].meta.icon" :class="['iconfont', item.children[0].meta.icon]"></i>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </div>
      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <!-- <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon> -->
          <i v-if="item.meta&&item.meta.icon" :class="['iconfont', item.meta.icon]"></i>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
          <div v-else @click="go(item.path+'/'+child.path, child.name)" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <!-- <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon> -->
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </div>
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import bus from '@/utils/bus'
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    go(path, name){
      const tabNameList = this.$store.state.globalData.tabNameList;
      // 如果顶部导航已有对应的页面，则不需要刷新页面；不在顶部导航里的页面，需要刷新页面
      if(!tabNameList.includes(name)){ // 不在顶部导航标签里
        if(name == 'rule'){ // 决策规则配置
           bus.$emit('iframeReload')
        }else{ // 非决策规则配置

          //打开新标签需要解除缓存机制，待加入顶部导航栏时才恢复缓存机制
          this.$store.dispatch('SetExclude', [name])
        }
      }
      this.$router.push({
        path
      })
    }
  },
}
</script>
