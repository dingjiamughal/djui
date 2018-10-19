<template lang="pug">
    div(:class="colCls")
        slot
</template>

<script>
export default {
    name: 'Col',
    computed: {
        colCls() {
            return [
                'sv-col-md-12'
            ];
        }
    }
};

</script>
