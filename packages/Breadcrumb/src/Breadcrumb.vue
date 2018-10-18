<template lang="pug">
    ul.sv-breadcrumb
        template(v-for="(item, i) in items")
            breadcrumb-item(:item="item", @link="goto")
            icon(v-if="i !== items.length - 1" :content="divider" :isExistIcon="isExistIcon")
                slot
</template>

<script>
import BreadcrumbItem from './Item';
import Icon from './Icon';
export default {
    name: 'Breadcrumb',
    components: {
        BreadcrumbItem,
        Icon
    },
    props: {
        items: Array,
        icon: String
    },
    computed: {
        divider() {
            return this.icon ? this.icon : '/';
        },
        isExistIcon() {
            return !!!this.icon;
        }
    },
    methods: {
        goto(item) {
            this.$emit('goto', item);
        }
    },
    created() {
        // console.log(this.isExistIcon)
        // console.log(this)
    }
};

</script>

<style lang="less" scoped>
.sv-breadcrumb {
    display: flex;
    align-items: center;
    list-style: none;
    & > li {
        display: flex;
        align-items: center;
    }
    &-item {
        color: @palette-primary-2;
        cursor: pointer;

        .disabled {
            color: @palette-grey-2
        }
    }
    &-divider {
        color: @palette-grey-2;
        padding: 0 12px;
    }
}
</style>
