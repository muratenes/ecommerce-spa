import request from '@admin/modules/auth/request'
import router from '@admin/router'

export default {
    async login({commit, dispatch}, payload) {
        try {
            const {data} = await request.login(payload.email, payload.password)
            commit('SET_BEARER', data.data.access_token)
            dispatch('auth/me', {}, {root: true})
            dispatch('success', {message: 'Login Success'}, {root: true})
            return data;

        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
            throw error
        }
    },

    async me({commit, dispatch}, payload) {
        try {
            const {data} = await request.me()
            return data;
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
            throw error
        }
    },
    async logout({commit, dispatch}) {
        try {
            await request.logout()

            commit('LOGOUT')
            dispatch('user/logout', {}, {root: true})

            dispatch('success', {message: 'You are logged out'}, {root: true})
        } catch (error) {
            if (error.response) dispatch('error', error.response.data, {root: true})
            throw error
        }
    },
    async refresh({commit}) {
        try {
            const {data} = await request.refresh()
            commit('SET_BEARER', data.data.access_token)

            return data.data.access_token
        } catch (error) {
            commit('LOGOUT')
            commit('auth/LOGOUT', {}, {root: true})

            router.push({name: 'admin.login'})

            throw error
        }
    }
}
