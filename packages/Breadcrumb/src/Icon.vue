<template lang="pug">
    li.sv-breadcrumb-divider
        span(v-if="!isExistIcon") {{content}}
        slot(v-else)
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: '/'
        },
        isExistIcon: {
            type: Boolean,
            default: false
        }
    },
    created() {
        console.log(this)
    }
};

</script>

<style lang="less" scoped>

</style>
