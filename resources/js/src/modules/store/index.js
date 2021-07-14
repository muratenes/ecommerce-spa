/*=========================================================================================
  File Name: store.js
  Description: Vuex store
==========================================================================================*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// modules
import category from '@category/store'


Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
      category,
  },
  mutations,
  state,
  strict: process.env.NODE_ENV !== 'production'
})
