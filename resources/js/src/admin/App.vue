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
        <div class="content-wrapper">
            <router-view/>
        </div>
        <app-footer/>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->


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
        appNavbar : Navbar,
        appLeftMenu : LeftMenu
    }
}
</script>
