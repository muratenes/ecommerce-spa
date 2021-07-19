import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

// components
import Admin from "./components/home/Admin";

// routes
import Category from '@admin/modules/category/router'
import Auth from '@admin/modules/auth/router'


const routes = []

export default new Router({
    mode: 'history',
    base: '/panel/',
    routes: [
        // ==============================================
        // MAIN LAYOUT ROUTES
        // =============================================
        {
            path: '',
            name: 'admin.dashboard',
            component: Admin,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '', component: () => import('./components/home/Dashboard'), name: 'admin.dashboard'
                },
                Category,
            ]
        },
        // =======================================
        // FULL PAGE LAYOUTS
        // =======================================
        {
            children: [
                // ===============================
                // PAGES
                // ===============================
                {
                    component: () => import('@admin/modules/auth/components/Login.vue'),
                    name: 'admin.login',
                    path: '/pages/login'
                },
                {
                    component: () => import('@admin/modules/auth/components/Register'),
                    name: 'admin.register',
                    path: '/pages/register'
                },
                {
                    component: () => import('@admin/modules/auth/components/NotAuthorized.vue'),
                    name: 'admin.not-authorized',
                    path: '/pages/not-authorized'
                },
                {
                    component: () => import('@admin/modules/auth/components/Register.vue'),
                    name: 'admin.not-found',
                    path: '/pages/error-404'
                }
            ],
            component: () => import('@admin/layouts/FullPage.vue'),
            path: ''
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ]
})
