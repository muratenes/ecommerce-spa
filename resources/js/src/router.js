import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

// components
import Category from './modules/category/components/index'
import CategoryDetail from './modules/category/components/detail'

// routes
// import Category from './modules/category/router'


const routes = [
    {
        path: "/categories",
        component: Category,
        name: 'categories'
    },
    {
        path: "/categories/1",
        component: CategoryDetail,
        name: 'categories.show'
    }
]

export default new Router({
    mode : 'history',
    routes
})
