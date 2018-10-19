<template lang="pug">
    transition(name="fade", @after-leave="afterLeave", @after-enter="afterEnter")
        .notify(:style="style",
                    v-show="visible",
                    @mouseenter="clearTimer",
                    @mouseleave="createTimer")
            span.content {{title}}
            p {{message}}
            button.btn(@click="handleCloseNotify") {{btn}}
</template>

<script>
export default {
    name: 'Notification',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        message: {
            type: String,
            default: ''
        },
        btn: {
            type: String,
            default: '关闭'
        }

    },
    computed: {
        style() {
            return {};
        }
    },
    data() {
        return {
            visible: true
        };
    },
    methods: {
        handleCloseNotify(e) {
            e.preventDefault();
            this.$emit('closeNotify');
        },
        afterLeave() {
            this.$emit('leave');
        },
        afterEnter () {},
        clearTimer () {},
        createTimer () {}
    }
};

</script>

<style lang="less" scoped>
.notify {
    display: inline-flex;
    background-color: #303030;
    color: rgba(255, 255, 255, 1);
    align-items: center;
    padding: 20px;
    min-width: 280px;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    flex-wrap: wrap;
    transition: all .3s;

    .content {
        padding: 0;
    }

    .btn {
        color: #ff4081;
        padding-left: 24px;
        margin-left: auto;
        cursor: pointer;
    }
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
</style>
