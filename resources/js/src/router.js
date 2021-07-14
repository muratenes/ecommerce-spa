import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

// components
import Home from "./components/home/Home";

// routes
import Category from '@modules/category/router'


const routes = [
    {
        path: "/",
        component: Home,
        name: 'home'
    },
    Category
]

export default new Router({
    mode : 'history',
    routes
})
