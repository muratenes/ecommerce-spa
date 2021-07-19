<template>
    <div>
        <!-- Preloader -->
        <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
        </div>

        <!-- navbar -->
        <app-navbar/>
        <!-- Main Sidebar Container -->
        <app-left-menu/>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper" id="app">
            <router-view></router-view>
        </div>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

    </div>
</template>

<script>
import Header from "@admin/components/shared/Header";
import Footer from "@admin/components/shared/Footer";
import Navbar from "@admin/components/shared/Navbar";
import LeftMenu from "@admin/components/shared/LeftMenu";

export default {
    components: {
        appHeader: Header,
        appFooter: Footer,
        appNavbar: Navbar,
        appLeftMenu: LeftMenu
    }
}
</script>
