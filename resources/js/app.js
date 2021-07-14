require('./bootstrap');
import Vue from 'vue'

// Vue
window.Vue = require('vue')

// Vue Router
import Router from './src/router'

// components
Vue.component('app', require('./src/components/App').default)


const app = new Vue({
    el: '#app',
    router: Router

})
