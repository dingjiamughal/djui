<template lang="pug">
    div
        button(@click="backtotop") back to top
</template>

<script>
export default {
    name: 'backToTop',
    methods: {
        backtotop() {
            console.log('back to top');
            this.$emit('to-top');
        }
    }
};

</script>
