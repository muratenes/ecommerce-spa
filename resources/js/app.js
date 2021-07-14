require('./bootstrap');
import Vue from 'vue'

// Vue
window.Vue = require('vue')

// Vue Router
import Router from './src/router'

// axios
import axios from './src/axios.js'

Vue.prototype.$http = axios

// Store
import store from '@modules/store'

// components
Vue.component('app', require('./src/components/App').default)


const app = new Vue({
    el: '#app',
    router: Router,
    store

})
