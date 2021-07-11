import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

// components
import Category from './modules/category/components/index'

// routes
// import Category from './modules/category/router'


const routes = [
    {
        path: "/categories",
        component: Category,
        name: 'categories'
    }
]

export default new Router({
    mode : 'history',
    routes
})
