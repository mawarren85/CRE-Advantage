// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import VueSweetalert2 from 'vue-sweetalert2';

const Vue = require('vue')
const App = require ('./App')
const router = require('./router')
// const VueSweetalert2 from 'vue-sweetalert2';


// const Nav = require(from './components/Nav.vue'
Vue.component('Nav', Nav)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Nav },
  template: '<App/>'
})
