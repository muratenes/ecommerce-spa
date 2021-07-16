export default {
    path: '/products',
    component: () => import('./components/ProductList'),
    name: 'products.index',
    children: [
        {
            path: '', component: () => import('./components/ProductList'), name: 'products.list'
        }
    ]
}
