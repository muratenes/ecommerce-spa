<template>
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="header-left header-dropdowns">
                    <div class="header-dropdown">
                        <a href="#">USD</a>
                        <div class="header-menu">
                            <ul>
                                <li><a href="#">EUR</a></li>
                                <li><a href="#">USD</a></li>
                            </ul>
                        </div><!-- End .header-menu -->
                    </div><!-- End .header-dropown -->

                    <div class="header-dropdown">
                        <a href="#"><img src="assets/images/flags/en.png" alt="England flag">ENGLISH</a>
                        <div class="header-menu">
                            <ul>
                                <li><a href="#"><img src="assets/images/flags/en.png" alt="England flag">ENGLISH</a></li>
                                <li><a href="#"><img src="assets/images/flags/fr.png" alt="France flag">FRENCH</a></li>
                            </ul>
                        </div><!-- End .header-menu -->
                    </div><!-- End .header-dropown -->

                    <div class="dropdown compare-dropdown">
                        <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                            <i class="icon-retweet"></i> Compare (2)
                        </a>

                        <div class="dropdown-menu">
                            <div class="dropdownmenu-wrapper">
                                <ul class="compare-products">
                                    <li class="product">
                                        <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                        <h4 class="product-title"><a href="product.html">Lady White Top</a></h4>
                                    </li>
                                    <li class="product">
                                        <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                        <h4 class="product-title"><a href="product.html">Blue Women Shirt</a></h4>
                                    </li>
                                </ul>

                                <div class="compare-actions">
                                    <a href="#" class="action-link">Clear All</a>
                                    <a href="#" class="btn btn-primary">Compare</a>
                                </div>
                            </div><!-- End .dropdownmenu-wrapper -->
                        </div><!-- End .dropdown-menu -->
                    </div><!-- End .dropdown -->
                </div><!-- End .header-left -->

                <div class="header-right">
                    <p class="welcome-msg">Default welcome msg! </p>

                    <div class="header-dropdown dropdown-expanded">
                        <a href="#">Links</a>
                        <div class="header-menu">
                            <ul>
                                <li><a href="my-account.html">MY ACCOUNT </a></li>
                                <li><a href="#">DAILY DEAL</a></li>
                                <li><a href="#">MY WISHLIST </a></li>
                                <li><a href="blog.html">BLOG</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="#" class="login-link">LOG IN</a></li>
                            </ul>
                        </div><!-- End .header-menu -->
                    </div><!-- End .header-dropown -->
                </div><!-- End .header-right -->
            </div><!-- End .container -->
        </div><!-- End .header-top -->

        <div class="header-middle">
            <div class="container">
                <div class="header-left">
                    <router-link :to="{ name : 'home' }" tag="a" class="logo">
                        <img src="assets/images/logo.png" alt="Logo title">
                    </router-link>
                </div><!-- End .header-left -->

                <div class="header-center">
                    <div class="header-search">
                        <a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a>
                        <form action="#" method="get">
                            <div class="header-search-wrapper">
                                <input type="search" class="form-control" name="q" id="q" placeholder="Search..." required>
                                <div class="select-custom">
                                    <select id="cat" name="cat">
                                        <option value="">All Categories</option>
                                        <option value="4">Fashion</option>
                                        <option value="12">- Women</option>
                                        <option value="13">- Men</option>
                                        <option value="66">- Jewellery</option>
                                        <option value="67">- Kids Fashion</option>
                                        <option value="5">Electronics</option>
                                        <option value="21">- Smart TVs</option>
                                        <option value="22">- Cameras</option>
                                        <option value="63">- Games</option>
                                        <option value="7">Home &amp; Garden</option>
                                        <option value="11">Motors</option>
                                        <option value="31">- Cars and Trucks</option>
                                        <option value="32">- Motorcycles &amp; Powersports</option>
                                        <option value="33">- Parts &amp; Accessories</option>
                                        <option value="34">- Boats</option>
                                        <option value="57">- Auto Tools &amp; Supplies</option>
                                    </select>
                                </div><!-- End .select-custom -->
                                <button class="btn" type="submit"><i class="icon-magnifier"></i></button>
                            </div><!-- End .header-search-wrapper -->
                        </form>
                    </div><!-- End .header-search -->
                </div><!-- End .headeer-center -->

                <div class="header-right">
                    <button class="mobile-menu-toggler" type="button">
                        <i class="icon-menu"></i>
                    </button>
                    <div class="header-contact">
                        <span>Call us now</span>
                        <a href="tel:#"><strong>+123 5678 890</strong></a>
                    </div><!-- End .header-contact -->

                    <div class="dropdown cart-dropdown">
                        <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                            <span class="cart-count">2</span>
                        </a>

                        <div class="dropdown-menu">
                            <div class="dropdownmenu-wrapper">
                                <div class="dropdown-cart-header">
                                    <span>2 Items</span>

                                    <a href="cart.html">View Cart</a>
                                </div><!-- End .dropdown-cart-header -->
                                <div class="dropdown-cart-products">
                                    <div class="product">
                                        <div class="product-details">
                                            <h4 class="product-title">
                                                <a href="product.html">Woman Ring</a>
                                            </h4>

                                            <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $99.00
                                                </span>
                                        </div><!-- End .product-details -->

                                        <figure class="product-image-container">
                                            <a href="product.html" class="product-image">
                                                <img src="assets/images/products/cart/product-1.jpg" alt="product">
                                            </a>
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                        </figure>
                                    </div><!-- End .product -->

                                    <div class="product">
                                        <div class="product-details">
                                            <h4 class="product-title">
                                                <a href="product.html">Woman Necklace</a>
                                            </h4>

                                            <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $35.00
                                                </span>
                                        </div><!-- End .product-details -->

                                        <figure class="product-image-container">
                                            <a href="product.html" class="product-image">
                                                <img src="assets/images/products/cart/product-2.jpg" alt="product">
                                            </a>
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                        </figure>
                                    </div><!-- End .product -->
                                </div><!-- End .cart-product -->

                                <div class="dropdown-cart-total">
                                    <span>Total</span>

                                    <span class="cart-total-price">$134.00</span>
                                </div><!-- End .dropdown-cart-total -->

                                <div class="dropdown-cart-action">
                                    <a href="checkout-shipping.html" class="btn btn-block">Checkout</a>
                                </div><!-- End .dropdown-cart-total -->
                            </div><!-- End .dropdownmenu-wrapper -->
                        </div><!-- End .dropdown-menu -->
                    </div><!-- End .dropdown -->
                </div><!-- End .header-right -->
            </div><!-- End .container -->
        </div><!-- End .header-middle -->

        <div class="header-bottom sticky-header">
            <div class="container">
                <nav class="main-nav">
                    <ul class="menu sf-arrows">
                        <router-link :to="{ name : 'home' }" tag="li" active-class="active">
                            <a>Anasayfa</a>
                        </router-link>
                        <router-link :to="{ name : 'categories' }" tag="li" active-class="active">
                            <a>Kategoriler</a>
                        </router-link>
                        <li class="megamenu-container">
                            <a href="product.html" class="sf-with-ul">Products</a>
                            <div class="megamenu">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="menu-title">
                                                    <a href="#">Variations</a>
                                                </div>
                                                <ul>
                                                    <li><a href="product.html">Horizontal Thumbnails</a></li>
                                                    <li><a href="product-full-width.html">Vertical Thumbnails<span class="tip tip-hot">Hot!</span></a></li>
                                                    <li><a href="product.html">Inner Zoom</a></li>
                                                    <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                                    <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                                </ul>
                                            </div><!-- End .col-lg-4 -->
                                            <div class="col-lg-4">
                                                <div class="menu-title">
                                                    <a href="#">Variations</a>
                                                </div>
                                                <ul>
                                                    <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                                    <li><a href="product-simple.html">Simple Product</a></li>
                                                    <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                                </ul>
                                            </div><!-- End .col-lg-4 -->
                                            <div class="col-lg-4">
                                                <div class="menu-title">
                                                    <a href="#">Product Layout Types</a>
                                                </div>
                                                <ul>
                                                    <li><a href="product.html">Default Layout</a></li>
                                                    <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                                    <li><a href="product-full-width.html">Full Width Layout</a></li>
                                                    <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                                    <li><a href="product-sticky-both.html">Sticky Both Side Info<span class="tip tip-hot">Hot!</span></a></li>
                                                    <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                                </ul>
                                            </div><!-- End .col-lg-4 -->
                                        </div><!-- End .row -->
                                    </div><!-- End .col-lg-8 -->
                                    <div class="col-lg-4">
                                        <div class="banner">
                                            <a href="#">
                                                <img src="assets/images/menu-banner.jpg" alt="Menu banner" class="product-promo">
                                            </a>
                                        </div><!-- End .banner -->
                                    </div><!-- End .col-lg-4 -->
                                </div><!-- End .row -->
                            </div><!-- End .megamenu -->
                        </li>
                        <li>
                            <a href="#" class="sf-with-ul">Kategoriler</a>
                            <ul>
                                <li v-for="category in getCategories">
                                    <router-link tag="a" :to="{name : 'categories'}">
                                        {{ category.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#" class="sf-with-ul">Features</a>
                            <ul>
                                <li><a href="#">Header Types</a></li>
                                <li><a href="#">Footer Types</a></li>
                            </ul>
                        </li>
                        <li class="float-right"><a href="#">Special Offer!</a></li>
                    </ul>
                </nav>
            </div><!-- End .header-bottom -->
        </div><!-- End .header-bottom -->
    </header>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Header.vue",
    computed: {
        ...mapGetters('category', ['getCategories'])
    },
    methods: {
        ...mapActions('category', ['list'])
    },
    created() {
        this.list()
    }
}
</script>

<style scoped>

</style>
