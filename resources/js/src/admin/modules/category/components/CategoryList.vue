<template>
    <div>
        <h1>Admin CategoryList.vue</h1>
        <ul>
            <li v-for="category in getCategories">
                <router-link tag="a" :to="{name : 'admin.categories.show',params : {slug : category.slug}}">
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
