<template>
  <div id="app">
    <p>
      <router-link to="/">home</router-link>
      <router-link to="/data/inner">paging</router-link>
      <router-link to="/data/input">input</router-link>
      <router-link to="/data/output">output</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
