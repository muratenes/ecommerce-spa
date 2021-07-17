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
Vue.component('app', require('./src/admin/App.vue').default)


// mixins
import mixins from './src/mixins'
console.log(mixins)
var myMixin = {
    data() {
        return {
            version: 1111
        }
    },
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}


const app = new Vue({
    el: '#app',
    router: Router,
    store,
    mixins: mixins
})
