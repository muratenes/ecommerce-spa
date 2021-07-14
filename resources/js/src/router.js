import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

// components
import Home from "./components/home/Home";

// routes
import Category from './modules/category/router'


export default new Router({
    // base: '/',
    mode: 'history',
    routes: [
        {
            children: [
                {
                    path: "/",
                    component: Home,
                    name: 'home'
                },
                Category
            ],

            component: () => import('./components/App'),
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: ''
        }
    ]
})
