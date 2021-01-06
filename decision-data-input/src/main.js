import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  render: h => h(App)
});

