<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import LeftMenu from "./components/shared/LeftMenu";

export default {
    components: {
        appHeader: Header,
        appFooter: Footer,
        appNavbar: Navbar,
        appLeftMenu: LeftMenu
    }
}
</script>
