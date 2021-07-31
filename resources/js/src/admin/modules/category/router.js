export default {
    path: '/panel/categories',
    component: () => import('./components/CategoryIndex'),
    children: [
        {
            path: '', component: () => import('./views/CategoryList'), name: 'admin.categories.list'
        },
        {
            path: ':id', component: () => import('./views/CategoryDetail'), name: 'admin.categories.show'
        }
    ]
}
