import state from './state.js'
import mutations from './mutations.js'
import actions from './actions'
import getters from './getters'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

