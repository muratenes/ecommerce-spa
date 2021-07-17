require('./bootstrap');
import Vue from 'vue'

// Vue
window.Vue = require('vue')

// Vue Router
import AdminRouter from './src/admin/router'


// axios
import axios from './src/axios.js'

Vue.prototype.$http = axios

// Store
import store from '@modules/store'

// components
Vue.component('app', require('./src/admin/App.vue').default)

// filters
import './src/filters/filters'

// mixins
import mixins from './src/mixins'

const app = new Vue({
    el: '#app',
    router: AdminRouter,
    store,
    mixins: mixins
})
