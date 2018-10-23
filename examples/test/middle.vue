<template lang="pug">
    .middle
        v-input(v-model="inputv", @change="handleChange")

</template>
<script>
import VInput from './v-model';
export default {
    components: {
        VInput
    },
    // model: {
    //     prop: 'inputv',
    //     event: 'input'
    // },
    props: {
        inputv: String
    },
    data() {
        return {

        };
    },
    methods: {
        handleChange(v) {
            this.$emit('change', v);
        }
    }
};

</script>
