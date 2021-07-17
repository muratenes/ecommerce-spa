export default {
    path: '/categories',
    component: () => import('./components/CategoryIndex'),
    name: 'admin.categories.index',
    children: [
        {
            path: '', component: () => import('./components/CategoryList'), name: 'admin.categories.list'
        },
        {
            path: ':slug', component: () => import('./components/CategoryDetail'), name: 'admin.categories.show'
        }
    ]
}
