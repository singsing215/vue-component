import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

ElementUI.TableColumn.props.showOverflowTooltip.default = true
ElementUI.Table.props.defaultExpandAll.default = true
ElementUI.Input.props.clearable.default = true
ElementUI.Select.props.clearable.default = true

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