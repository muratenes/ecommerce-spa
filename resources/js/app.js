require('./bootstrap');
import Vue from 'vue'

// Vue
window.Vue = require('vue')

// components
Vue.component('app', require('./components/app.vue').default)


const app = new Vue({
    el: '#app'
})
