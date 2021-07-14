import axios from '@/axios'

const makeUrl = path => `/categories/${path}`

export default {
  list () {
    return axios.get(makeUrl(''))
  },
  getCategoryBySlug (slug) {
    return axios.get(makeUrl(slug))
  }
}
