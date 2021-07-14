<template>
    <div>
        <h1>Category index</h1>
        <ul>
            <li v-for="category in getCategories">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoryIndex.vue",
    computed: {
        ...mapGetters('category', ['getCategories'])
    },
}
</script>
