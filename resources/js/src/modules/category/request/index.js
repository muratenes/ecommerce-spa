import axios from '@/axios'

const makeUrl = path => `/categories/${path}`

export default {
  list () {
    return axios.get(makeUrl(''))
  },
  getCategoryById (id) {
    return axios.get(makeUrl(id))
  }
}
