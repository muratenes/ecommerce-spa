<template>
    <div>
        <breadcrumb title="Category Detail"/>
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <!-- left column -->
                    <div class="col-md-12">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Quick Example</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <div class="card-body">
                                <div class="form-row">
                                    <div class="form-group col-md-3">
                                        <label>Başlık</label>
                                        <input type="text" class="form-control" placeholder="Başlık Giriniz" v-model="category.title">
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label>Slug</label>
                                        <input type="text" class="form-control" placeholder="Slug" v-model="category.slug">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Kısa Açıklama</label>
                                        <input type="text" class="form-control" placeholder="Kısa Açıklama giriniz." v-model="category.short_description">
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-success">Kaydet</button>
                            </div>

                        </div>
                        <!-- /.card -->
                    </div>
                    <!--/.col (left) -->
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import Breadcrumb from "../../../components/shared/Breadcrumb";
import {mapActions} from "vuex";

export default {
    name: "CategoryDetail",
    components: {
        Breadcrumb
    },
    data() {
        return {
            category: []
        }
    },
    methods: {
        async getCategoryById(id) {
            const {data} = await this.$store.dispatch('category/getCategoryById', id)
            this.category = data
        }
    },

    beforeRouteUpdate(to, from, next) {
        this.getCategoryById(to.params.id)
        next()
    },
    mounted() {
        this.getCategoryById(this.$route.params.id)
    },
}
</script>

