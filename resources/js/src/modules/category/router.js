export default {
    path: '/categories',
    component: () => import('./components/CategoryIndex'),
    name: 'categories.index',
    children: [
        {
            path: '', component: () => import('./components/CategoryList'), name: 'categories.list'
        },
        {
            path: ':slug', component: () => import('./components/CategoryDetail'), name: 'categories.show'
        }
    ]
}
