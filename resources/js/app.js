require('./bootstrap');
import Vue from 'vue'

// App.Vue
import App from './src/admin/App.vue'

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
// Vue.component('app', require('./src/admin/App.vue').default)

// filters
import './src/filters/filters'

// mixins
import mixins from './src/mixins'

// vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

// Vue localization
import messagesTR from './src/languages/tr/message'
import messagesEN from './src/languages/en/message'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
    en: { message: messagesEN },
    tr: { message: messagesTR }
}

const i18n = new VueI18n({
    fallbackLocale: 'tr',
    formatFallbackMessages: true,
    locale: localStorage.getItem('language') || 'tr',
    messages
})

import 'material-icons/iconfont/material-icons.css';

const app = new Vue({
    el: '#app',
    router: AdminRouter,
    store,
    i18n,
    mixins: mixins,
    render: h => h(App),
})
