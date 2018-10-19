<template lang="pug">
    li.sv-breadcrumb-divider
        span {{content}}
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: '/'
        }
    }
};

</script>

<style lang="less" scoped>

</style>
