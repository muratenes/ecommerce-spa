import request from '../request'

export default {
    async getProductsByCategorySlug({dispatch, commit}, categoryId) {
        try {
            const {data} = await request.getProductsByCategorySlug(categoryId)
            return data;
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
        }
    },

    async getProductBySlug({dispatch, commit}, productSlug) {
        try {
            const {data} = await request.getProductBySlug(productSlug)
            return data;
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
        }
    }
}
