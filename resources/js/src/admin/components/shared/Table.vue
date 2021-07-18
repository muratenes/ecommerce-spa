<template>
    <div class="q-table w-full">
        <vs-table
            :sst="true"
            :max-items="perPageItem"
            :search="searchable"
            :data="list"
            :total="totalItemCount"
            @sort="handleSort"
            @search="handleSearch"
            @change-page="handleChangePage"
        >
            <template slot="thead">
                <vs-th
                    v-for="(column, index) in columns"
                    v-if="column.hasOwnProperty('visible') ? column.visible : true"
                    :key="index"
                    :sort-key="column.data"
                >
                    {{ $t(`${column.label}`) }}
                </vs-th>

                <vs-th v-if="hasActionsSlot()">
                    {{ ("message.actions") }}
                </vs-th>
            </template>
            <template slot-scope="{ data }">
                <vs-tr
                    v-for="(tr, indextr) in data"
                    :key="indextr"
                    :data="tr"
                    @clicktr="selectRow(tr)"
                >
                    <vs-td
                        v-for="column in columns"
                        v-if="column.hasOwnProperty('visible') ? column.visible : true"
                        :key="column.name"
                        :data="data[indextr][column.name]"
                    >
                        <template v-if="hasSlot(column.name)">
                            <slot :name="column.name" v-bind:data="data[indextr]"/>
                        </template>
                        <template v-else>
                            {{ get(data[indextr], column.data) }}
                        </template>
                    </vs-td>

                    <vs-td v-if="hasActionsSlot()">
                        <slot name="actions" v-bind:data="data[indextr]"/>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
        <vs-pagination
            :total="totalPageCount"
            v-model="currentPage"
            :prev-icon="$vs.rtl ? 'arrow_forward' : 'arrow_back'"
            :next-icon="$vs.rtl ? 'arrow_back' : 'arrow_forward'"/>
        <pre ref="pre"></pre>
    </div>
</template>

<script>
import qs from 'qs'
import {get} from 'lodash'
import axios from '@/axios'

export default {
    name: 'q-table',
    props: {
        url: {
            type: String,
            required: true
        },
        search: {
            type: String,
            required: false
        },
        columns: {
            type: Array,
            required: true
        },
        perPageItem: {
            type: Number,
            default: 10
        },
        pagination: {
            type: Boolean,
            default: true
        },
        searchable: {
            type: Boolean,
            default: true
        },
        orderCol: {
            type: Number,
            default: 0
        },
        orderDir: {
            type: String,
            default: 'desc'
        }
    },
    data() {
        return {
            list: [],
            orderColumnIndex: this.orderCol,
            orderDirection: this.orderDir,
            searchX: '',
            currentPage: 1,
            totalItemCount: 0,
            totalPageCount: 1
        }
    },
    async created() {
        await this.getList()
        this.$root.$on(this.url, () => {
            this.getList()
        })
    },
    mounted() {
        const table = document.getElementsByClassName('vs-table')
    },
    methods: {
        selectRow(data) {
            console.log(data)
        },

        get() {
            return get(...arguments)
        },
        hasActionsSlot() {
            return !!this.$scopedSlots.actions
        },
        hasSlot(slot) {
            return !!this.$scopedSlots[slot]
        },
        async getList() {
            const {data} = await axios.get(this.url, {
                params: {
                    start:
                        this.currentPage > 0
                            ? this.perPageItem * (this.currentPage - 1)
                            : 0,
                    length: this.perPageItem,
                    columns: this.columns,
                    search: {
                        value: this.searchX
                    },
                    order: [{column: this.orderColumnIndex, dir: this.orderDirection}]
                },
                paramsSerializer(params) {
                    return qs.stringify(params, {arrayFormat: 'indices'})
                }
            })

            this.list = data.data
            this.totalItemCount = data.recordsFiltered
            this.totalPageCount = Math.round(data.recordsFiltered / this.perPageItem)
        },
        async handleSearch(searching) {
            this.currentPage = 1
            this.searchX = searching

            await this.getList()
        },
        async handleChangePage(page) {
            this.currentPage = page

            await this.getList()
        },
        async handleSort(key, active) {
            const index = this.$props.columns.findIndex(item => item.data === key)

            this.orderColumnIndex = active ? index : 0
            this.orderDirection = active
            if (this.orderColumnIndex > 0) {
                await this.getList()
            }
        }
    },
    watch: {
        currentPage: function (oldPage, currentPage) {
            this.getList()
        }
    }
}
</script>
