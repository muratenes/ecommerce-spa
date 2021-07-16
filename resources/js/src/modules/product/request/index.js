import axios from '@/axios'

const makeUrl = path => `/products/${path}`

export default {
    getProductsByCategorySlug(categorySlug) {
        return axios.get(makeUrl(`getProductsByCategory/${categorySlug}`))
    },
    getProductBySlug(productSlug){
        return axios.get(makeUrl(productSlug))
    }
}
