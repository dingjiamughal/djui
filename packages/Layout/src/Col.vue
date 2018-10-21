<template lang="pug">
    div(:class="colCls")
        slot
</template>

<script>
export default {
    name: 'Col',
    props: {
        sm: [String, Number],
        md: [String, Number],
        lg: [String, Number],
        xs: [String, Number],
        flex: [String, Number],
    },
    computed: {
        colCls() {
            return [
                'sv-col-md-12'
            ];
        }
    }
};

</script>
