import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

// components
import Admin from "./components/home/Admin";

// routes
import Category from '@admin/modules/category/router'


const routes = [
    {
        path: "/panel",
        name: 'panel.dashboard',
        component: Admin,
        children: [
            {
                path: '', component: () => import('./components/home/Dashboard'), name: 'admin.dashboard'
            },
            Category,
        ]
    },

]

export default new Router({
    mode: 'history',
    routes
})
