<template>
    <div :class="'form-group col-md-'+ width">
        <label>{{ label }}</label>
        <input :type="type"
               class="form-control"
               v-bind:class="{ 'is-invalid': instance &&  instance.$error, 'is-valid' : instance &&  (!instance.$error && instance.$dirty )}"
               placeholder="Başlık Giriniz"
               v-model="inputData"
               @keyup="$emit('update:inputData', inputData);">
        <template v-if="instance">
            <span class="error invalid-feedback" v-if="!instance.required">{{ $t('message.validations.this_field_required') }}</span>
            <span class="error invalid-feedback" v-if="!instance.minLength"> {{ $t('message.validations.min_x_character', {count: instance.$params.minLength.min}) }} </span>
            <span class="error invalid-feedback" v-if="!instance.maxLength"> {{ $t('message.validations.max_x_character', {count: instance.$params.maxLength.max}) }}</span>
        </template>
    </div>
</template>

<script>
export default {
    name: "XInput",
    props: {
        width: 3,
        type: {
            type: String,
            default: "text"
        },
        classes: {
            type: String,
            default: "form-control",
            required: false
        },
        label: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false,
        },
        inputData: String,
        instance: {
            type: Object,
            required: false
        }
    },
    created() {
        console.log(this.classes);
    }
}
</script>

<style scoped>

</style>
