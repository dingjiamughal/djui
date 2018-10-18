<template lang="pug">
    li.sv-breadcrumb-item(@click="link(item)")
        a(:class="{disabled: disable}") {{item.text}}
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        disable() {
            return !!this.item.disabled;
        }
    },
    methods: {
        link(item) {
            this.$emit('link', item);
        }
    }
};

</script>

<style lang="less" scoped>
.sv-breadcrumb-item {
    color: @palette-primary-2;
    cursor: pointer;

    .disabled {
        color: @palette-grey-2;
        cursor: text;
    }
}
</style>
