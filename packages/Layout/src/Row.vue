<template lang="pug">
    div(:class="rowCls")
        slot
</template>

<script>
export default {
    name: 'Row',
    computed: {
        rowCls() {
            return [
                'sv-row'
            ];
        }
    }
};

</script>
