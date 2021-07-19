// axios
import axios from 'axios'
import store from '@admin/modules/store'

const accessToken = `Bearer ${localStorage.getItem('accessToken')}`

const baseURL = '/api/'

let subscribers = []

// Token Refresh
let isAlreadyFetchingAccessToken = false

function onAccessTokenFetched (access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

const request = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Authorization': accessToken,
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const { config: originalRequest, response } = error

    // if status === 401
    if (response && response.status === 401) {
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true
        store
          .dispatch('auth/refresh')
          .then(access_token => {
            isAlreadyFetchingAccessToken = false
            onAccessTokenFetched(access_token)
          })
          .catch(error => {
            return Promise.reject(error)
          })
      } else {
        return Promise.reject()
      }

      const retryOriginalRequest = new Promise(resolve => {
        addSubscriber(access_token => {
          originalRequest.headers.Authorization = `Bearer ${access_token}`
          resolve(axios(originalRequest))
        })
      })

      return retryOriginalRequest
    }

    return Promise.reject(error)
  }
)

export default request
