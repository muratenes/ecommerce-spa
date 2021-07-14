<template>
    <div>
        <h1>Category Detail Page</h1>
        <p>
            slug : {{ $route.params.slug }}
        </p>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "detail.vue",
    computed: {
        ...mapGetters('category', ['getCategory']),
    },
    created() {
        this.$store.dispatch('category/getCategoryBySlug', this.$route.params.slug)
    }
}
</script>

