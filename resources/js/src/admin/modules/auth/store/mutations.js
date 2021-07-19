import axios from '@/axios'

export default {
  LOGOUT (state) {
    state.access_token = null
    state.is_login = false
    
    localStorage.removeItem('accessToken')
  },
  SET_BEARER (state, access_token) {
    axios.defaults.headers.Authorization = `Bearer ${access_token}`
    localStorage.setItem('accessToken', access_token)
    state.access_token = access_token
  }
}
