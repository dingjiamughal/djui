<template lang="pug">
    div
        sv-button(type='primary', size='sm' @click="notify") 我
        //- sv-button(type='danger', size='lg') 丁佳
        //- sv-button(type='info') 爱
        //- sv-button(type='warning') 王思雯
        //- sv-button(type='success') ~
        sv-button(disabled) asdf
</template>

<script>

export default {
    methods: {
        notify() {
            // console.log(this);
            this.$notify({
                message: 'nihao'
            });
        }
    }
};

</script>

<style lang="less">

</style>
