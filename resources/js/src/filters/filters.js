import Vue from 'vue'

Vue.filter('date', value => value.substring(0,10)) // todo : add moment lib.
