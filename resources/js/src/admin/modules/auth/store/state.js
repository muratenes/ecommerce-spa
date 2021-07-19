const access_token = localStorage.getItem('accessToken')

export default {
  access_token: access_token === 'undefined' ? null : access_token,
  is_login: access_token && access_token !== 'undefined'
}
