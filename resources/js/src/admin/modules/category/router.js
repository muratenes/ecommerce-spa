export default {
    path: '/panel/categories',
    component: () => import('./components/CategoryIndex'),
    children: [
        {
            path: '', component: () => import('./components/CategoryList'), name: 'admin.categories.list'
        },
        {
            path: ':slug', component: () => import('./components/CategoryDetail'), name: 'admin.categories.show'
        }
    ]
}
