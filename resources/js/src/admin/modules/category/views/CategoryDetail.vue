<template>
    <div>
        <breadcrumb title="Category Detail"/>
        <!-- Main content -->
        <section class="content" v-if="category">
            <div class="container-fluid">
                <div class="row">
                    <!-- left column -->
                    <div class="col-md-12">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Category Detail</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form @submit.prevent="submit">
                                <div class="card-body">
                                    <x-input label="Test Label" :inputData.sync="category.title" :instance="$v.category.title"/>
                                    <p>parent : {{ category.title }}</p>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label>Başlık</label>
                                            <input type="text" class="form-control" v-bind:class="{ 'is-invalid': $v.category.title.$error, 'is-valid' :!$v.category.title.$error && $v.category.title.$dirty   }" placeholder="Başlık Giriniz"
                                                   v-model="category.title">
                                            <span class="error invalid-feedback" v-if="!$v.category.title.required">{{ $t('message.validations.this_field_required') }}</span>
                                            <span class="error invalid-feedback" v-if="!$v.category.title.minLength"> {{ $t('message.validations.min_x_character', {count: $v.category.title.$params.minLength.min}) }} </span>
                                            <span class="error invalid-feedback" v-if="!$v.category.title.maxLength"> {{ $t('message.validations.max_x_character', {count: $v.category.title.$params.maxLength.max}) }}</span>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label>Slug</label>
                                            <input type="text" class="form-control" v-bind:class="{ 'is-invalid': $v.category.slug.$error, 'is-valid' :!$v.category.slug.$error && $v.category.slug.$dirty   }" placeholder="Slug" v-model="category.slug">
                                            <span class="error invalid-feedback" v-if="!$v.category.slug.required">{{ $t('message.validations.this_field_required') }}</span>
                                            <span class="error invalid-feedback" v-if="!$v.category.slug.minLength"> {{ $t('message.validations.min_x_character', {count: $v.category.slug.$params.minLength.min}) }} </span>
                                            <span class="error invalid-feedback" v-if="!$v.category.slug.maxLength"> {{ $t('message.validations.max_x_character', {count: $v.category.slug.$params.maxLength.max}) }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label>Kısa Açıklama</label>
                                            <input type="text" class="form-control" v-bind:class="{ 'is-invalid': $v.category.short_description.$error, 'is-valid' :!$v.category.short_description.$error && $v.category.short_description.$dirty   }"
                                                   placeholder="Kısa Açıklama giriniz." v-model="category.short_description">
                                            <span class="error invalid-feedback" v-if="!$v.category.short_description.maxLength"> {{ $t('message.validations.max_x_character', {count: $v.category.short_description.$params.maxLength.max}) }}</span>
                                        </div>
<!--                                        <div class="form-group col-md-3">-->
<!--                                            <label>İcon</label>-->
<!--                                            <input type="text" class="form-control" v-bind:class="{ 'is-invalid': $v.category.icon.$error, 'is-valid' :!$v.category.icon.$error && $v.category.icon.$dirty   }" placeholder="Başlık Giriniz"-->
<!--                                                   v-model="category.icon">-->
<!--                                            <span class="error invalid-feedback" v-if="!$v.category.icon.required">{{ $t('message.validations.this_field_required') }}</span>-->
<!--                                            <span class="error invalid-feedback" v-if="!$v.category.icon.minLength"> {{ $t('message.validations.min_x_character', {count: $v.category.icon.$params.minLength.min}) }} </span>-->
<!--                                            <span class="error invalid-feedback" v-if="!$v.category.icon.maxLength"> {{ $t('message.validations.max_x_character', {count: $v.category.icon.$params.maxLength.max}) }}</span>-->
<!--                                        </div>-->
                                    </div>

                                </div>
                                <!-- /.card-body -->
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-success">Kaydet</button>
                                </div>
                            </form>
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
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import XInput from "../../../components/XInput";

export default {
    name: "CategoryDetail",
    components: {
        Breadcrumb,
        XInput
    },
    data() {
        return {
            category: null,
            submitStatus: null,
            text : "denre"
        }
    },
    methods: {
        async getCategoryById(id) {
            const {data} = await this.$store.dispatch('category/getCategoryById', id)
            this.category = data
        },
        async submit() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                await this.$store.dispatch('error', {root: true, title: this.$t('message.validations.invalid_form')})
            } else {
                try {
                    const response = await this.$store.dispatch('category/updateCategory', {id: this.category.id, category: this.category})
                    if (response) {
                        await this.$store.dispatch('success', {root: true})
                    }
                } catch (e) {
                    alert(e)
                    await this.$store.dispatch('error', {root: true, text: e.message})
                }
            }
        }
    },
    validations: {
        category: {
            title: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(50)
            },
            slug: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(70)
            },
            short_description: {
                maxLength: maxLength(255)
            }
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

