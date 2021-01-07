<template>
  <div id="app">
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
