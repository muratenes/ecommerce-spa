<template>
    <div>
        <h1>Category index</h1>
        <ul>
            <li v-for="category in getCategories">
                <router-link tag="a" :to="{name : 'categories.show',params : {slug : category.slug}}">
                    {{ category.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
    name: "CategoryIndex.vue",
    computed: {
        ...mapGetters('category', ['getCategories'])
    },
}
</script>
