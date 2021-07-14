import request from '../request'

export default {
  async list ({commit, dispatch}) {
    try {
      const {data} = await request.list()
      commit('SET_CATEGORIES', data.data)
    } catch (error) {
      if (error.response) dispatch('error', error.response.data, { root: true })
    }
  },


  async rewardRequest ({dispatch}, payload) {
    try {
      return await request.rewardRequest(payload.id, payload.url)
    } catch (error) {
      if (error.response) dispatch('error', error.response.data, { root: true })
    }
  }
}
