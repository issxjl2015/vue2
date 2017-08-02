// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// 默认加载Home页面
const Home = resolve => require(['./Home.vue'], resolve)
import Category from './Category'
import ShoppingCart from './ShoppingCart'
import Me from './Me'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history', // history: 依赖 HTML5 History API 和服务器配置。
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    { name: 'Home', path: './', component: Home },
    { name: 'Categories', path: './categories', component: Category },
    { name: 'ShoppingCart', path: './shoppingCart', component: ShoppingCart },
    { name: 'Me', path: './me', component: Me }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
