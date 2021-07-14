<template>
    <div>
        <app-header/>

        <!-- content -->
        <main class="main">
            <router-view></router-view>
        </main>

       <app-footer/>


    </div>
</template>
<script>
import Header from "./shared/Header";
import Footer from "./shared/Footer";

export default {
    components: {
        appHeader: Header,
        appFooter: Footer,
    }
}
</script>
