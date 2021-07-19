import axios from '@/axios'

const makeUrl = path => `/auth/${path}`

export default {
    login(email, pwd) {
        return axios.post(makeUrl('login'), {
            email,
            password: pwd
        })
    },
    me() {
        return axios.post(makeUrl('me'))
    },
    logout() {
        return axios.delete(makeUrl('logout'))
    },
    refresh() {
        return axios.post(makeUrl('refresh'))
    },
    register(name, email, password, confirmPassword) {
        return axios.post(makeUrl('register'), {
            email,
            name,
            password,
            password_confirmation: confirmPassword
        })
    },
}
