<template>
    <div>
        <breadcrumb title="Categories"/>
        <section class="content">
            <div class="container-fluid">
                <d-table
                    url="/panel/tables/categories"
                    :searchable="true"
                    :columns="columns"
                    :perPageItem="2"
                >
                    <template v-slot:created_at="{data}">
                        <p> {{ data.created_at|created_at }} </p>
                    </template>

                </d-table>
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from "../../../components/shared/Breadcrumb";
import {mapGetters} from "vuex";
import Table from "../../../components/shared/Table";
import columns from "../columns/categories"

export default {
    name: "CategoryIndex.vue",
    data() {
        return {
            columns
        }
    },
    computed: {
        ...mapGetters('category', ['getCategories'])
    },
    components: {
        Breadcrumb,
        dTable: Table
    }
}
</script>
