export default {
    path: '/products',
    component: () => import('./components/ProductIndex'),
    children: [
        {
            path: '', component: () => import('./components/ProductList'), name: 'products.list'
        },
        {
            path: ':slug', component: () => import('./components/ProductDetail'), name: 'products.detail'
        }
    ]
}
