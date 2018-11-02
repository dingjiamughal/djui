<template lang="pug">
    input(
        :value="inputVal",
        @input="handleInput"
    )
</template>
<script>
export default {
    props: {
        inputVal: String
    },
    model: {
        prop: 'value',
        event: 'input'
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        }
    }
};

</script>
