export default {
    data() {
        return {
            PRODUCT: {
                IMAGE_PREFIX: '/storage/products/'
            }
        }
    },
    methods: {
        productImage: function (imageName) {
            return this.PRODUCT.IMAGE_PREFIX + imageName;
        }
    }
}
