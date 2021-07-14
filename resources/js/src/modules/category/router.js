export default {
    component: () => import('./components/CategoryIndex'),
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
