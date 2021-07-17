import Vue from 'vue'

Vue.filter('created_at', value => value.substring(0,10)) // todo : add moment lib.
