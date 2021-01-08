import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('../views/home') },
  { path: '/data/paging', component: () => import('../views/data/paging') },
  { path: '/data/input', component: () => import('../views/data/input') },
  { path: '/data/output', component: () => import('../views/data/output') }

]

const router = new VueRouter(
  {
    routes: routes
  }
);


export default router