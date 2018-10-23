<template lang="pug">
    input(:value="inputVal", @input="handleInput", @click="handleClick")
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        value: String
    },
    // computed: {
    //     inputVal: {
    //         set(v) {
    //             // this.$emit('mutate', v);
    //             this.$emit('change', v);
    //         },
    //         get() {
    //             return this.value;
    //         }
    //     }
    // },
    methods: {
        // model模式下也需要发送emit
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        handleClick(e) {
            this.$emit('input', e.target.value);
        }
    }
};

</script>
