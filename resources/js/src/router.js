import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

// components
import Home from "./components/home/Home";

// routes
import Category from '@modules/category/router'
import Product from '@modules/product/router'


const routes = [
    {
        path: "/",
        component: Home,
        name: 'home'
    },
    Category,
    Product
]

export default new Router({
    mode : 'history',
    routes
})
