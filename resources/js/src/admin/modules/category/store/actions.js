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
    async getCategoryById({dispatch, commit}, id) {
        try {
            return await request.getCategoryById(id)
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
        }
    },
    async getCategoryBySlug({dispatch, commit}, slug) {
        try {
            const {data} = await request.getCategoryBySlug(slug)
            commit('SET_CATEGORY', data)
            return data;
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
        }
    },
    async updateCategory({dispatch, commit}, payload) {
        try {
            return await request.updateCategory(payload.id, payload.category)
        } catch (error) {
            console.log(error.response.data);
            if (error.response) dispatch('error', error.response.data, {root: true})
        }
    },
}
