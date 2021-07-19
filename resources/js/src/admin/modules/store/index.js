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
import category from '@admin/modules/category/store'
import auth from '@admin/modules/auth/store'


Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
      auth,
      category,
  },
  mutations,
  state,
  strict: process.env.NODE_ENV !== 'production'
})
