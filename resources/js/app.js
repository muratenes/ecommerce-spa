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
import store from '@admin/modules/store'

// components
// Vue.component('x-input', require('./src/admin/components/XInput'))

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

// Vue Validate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


// Vue Toast Notification
import Notifications from 'vue-notification'
Vue.use(Notifications,{type : 'success'})

// Vue Localization
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


// Global Route Auth Middleware
AdminRouter.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (! localStorage.getItem('accessToken')) {
            next({name: 'admin.login'})
        }
        next()
    } else {
        next()
    }
})

const app = new Vue({
    el: '#app',
    router: AdminRouter,
    store,
    i18n,
    mixins: mixins,
    render: h => h(App),
})
