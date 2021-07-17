<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>{{ this.title }}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link :to="{name : 'admin.dashboard'}">
                                <a>Home</a>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item active" v-if="! this.secondTitle">{{ this.title }}</li>
                        <template v-else>
                            <li class="breadcrumb-item">
                                <router-link :to="this.href">
                                    {{ this.title }}
                                </router-link>
                            </li>
                            <li class="breadcrumb-item active">{{ this.secondTitle }}</li>
                        </template>

                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
export default {
    name: "Breadcrumb",
    props: {
        title: {
            required: true,
            type: String
        },
        href: {
            required: false,
            type: String
        },
        secondTitle: {
            required: false,
            type: String
        },

    }
}
</script>

<style scoped>

</style>
