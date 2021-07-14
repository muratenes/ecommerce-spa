import request from '../request'

export default {
    async list({commit, dispatch}) {
        try {
            const {data} = await request.list()
            commit('SET_CATEGORIES', data.data)
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
        }
    },


    async getCategoryBySlug({dispatch}, slug) {
        try {
            return await request.getCategoryBySlug(slug)
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
        }
    }
}
