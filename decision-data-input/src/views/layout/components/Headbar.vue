<template>
  <el-header height="64px" class="head-container">
    <div class="head-item head-left">
      <div class="logo" @click="opening"></div>
      <span>|&nbsp;决策中心</span>
    </div>
    <Hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"/>
    <div class="head-main">
      <NavTabs/>
    </div>
    <div class="head-item head-right">
      <div class="role">
        <i class="icon iconfont" :class="[isMulti? 'dc-multi-role': 'dc-role']"></i>
        <el-popover placement="bottom" width="80" trigger="hover" :disabled="!isMulti">
          <div class="popover-role">
            <ul>
              <li v-for="(item, index) in roles" :key="index">{{item.roleName}}</li>
            </ul>
          </div>
          <div class="role-list" slot="reference">
            <span v-for="(item, index) in roles" :key="index">
              <span>{{item.roleName}}</span>
              <span v-if="index < roles.length - 1">、</span>
            </span>
          </div>
        </el-popover>
        <span class="line">|</span>
        <span>{{userName}}</span>
      </div>
      <div class="logout" @click="logout">
        <i class="el-icon-switch-button"></i>
          退出登录
      </div> 
    </div>
    <div class="big-dialog">
      <el-drawer :visible.sync="dialogVisible" size="88%" :before-close="close">
        <div class="showdata">
          <textarea style="border:0"   v-model="jsonData" :spellcheck="false" readonly></textarea>
        </div>
      </el-drawer>
    </div>
  </el-header>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import NavTabs from '@/components/NavTabs'
import { mapGetters } from 'vuex'
export default {
    name:'Headbar',
    components:{
      Hamburger,
      NavTabs
    },
    data(){
        return {
          dialogVisible:false,
          jsonData:[],
          isshow:false
        }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'permission_buttons',
      ]),
      userName(){
        return this.$store.state.globalData.userName;
      },
      roles(){
        return this.$store.state.permission.roles;
      },
      isMulti(){
        return this.$store.state.permission.roles.length > 1
      }
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      logout(){
          const url = window.location.href;
          const loginPath = `${process.env.BASE_API}/logout?redirect_uri=${url}`;
          window.location.replace(loginPath);
      },
      opening(){
        if(this.isshow){
          this.dialogVisible=true
          this.jsonData = JSON.stringify(this.permission_buttons,null,4)
        }
      },
      close(){
        this.dialogVisible=false
      }
    },
}
</script>
<style lang='scss' scoped>
.showdata{
   width: 100%;
    height: 98%;
    border:1px dashed #ccc;
    border-radius: 4px;
    padding:20px;
    textarea{
      width: 100%; 
      height: 100%;
      outline:none;
      resize:none;
      font-size: 20px;
      }
}
.popover-role{
  li{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    height: 25px;
    &:last-child{
      height: inherit;
    }
  }
}
.head-container{
  background: #1C2242;
  display: flex;
  align-items: center;
  color:#fff;
  font-family: 'Microsoft YaHei';
}
.head-left {
  font-size: 18px;
  font-weight: 700;
  .logo {
    background: url('../../../assets/logo.png') no-repeat 0 0/100%;
    width: 118px;
    height: 30px;
    margin-right: 8px;
  }
}
.head-main{
  flex:1;
  
}
.hamburger-container{
  width: 21px;
  color:#fff;
  margin-left: 40px;
  margin-right: 20px;
}
.head-right{
  min-width: 200px;
  .role{
    font-size:16px;
    color:#999;
    margin-right: 15px;
    display: flex;
    align-items: center;
    min-width: 190px;
    .iconfont{
      font-size:20px;
      margin-right: 15px;
    }
    .role-list{
      // display:flex;
      // align-items: center;
      max-width: 160px;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .line{
      margin: 0 15px;
    }
  }
  .logout{
    cursor: pointer;
  }
}
.head-item{
  display: flex;
  align-items: center;
  height: 100%;
}


</style>