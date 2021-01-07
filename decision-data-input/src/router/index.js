import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '../views/Foo.vue'
import Bar from '../views/Bar.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter(
  {
    routes: routes
  }
);


export default router