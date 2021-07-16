export default {
    data() {
        return {
            PRODUCT: {
                IMAGE_PREFIX: '/storage/products/'
            }
        }
    },
    created: function () {
        this.hello()
    },
    methods: {
        productImage: function (imageName) {
            return this.PRODUCT.IMAGE_PREFIX + imageName;
        }
    }
}
