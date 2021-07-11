export default {
    component: () => import('./components/index'),
    meta: {
        breadcrumb: [
            {title: 'Home', url: '/'},
            {active: true, title: 'Categories'}
        ],
        page: {
            title: 'Categories'
        }
    },
    name: 'categories',
    path: '/categories'
}
