<template lang="pug">
    .sv-backtop(:style="style")
        .sv-backtop-inner(@click="backtop")
            slot
</template>

<script>
export default {
    name: 'Backtop',
    props: {
        bottom: {
            type: Number,
            default: 50
        },
        right: {
            type: Number,
            default: 50
        },
        position: {
            type: Number,
            default: 0
        },
        target: {
            type: Function,
            default: () => window.document.documentElement
        }
    },
    data() {
        return {
            timer: null
        };
    },
    computed: {
        style() {
            return {
                bottom: `${this.bottom}px`,
                right: `${this.right}px`
            };
        }
    },
    methods: {
        backtop() {
            // if (this.timer) {
            //     return;
            // }
            let timer = setInterval(() => {
                const target = this.target();
                console.log(target.scrollTop);
                if (target.scrollTop > 0) {
                    target.scrollTop -= 10;
                }
                else {
                    target.scrollTop = 0;
                    // this.timeout = null;
                    clearInterval(timer);
                }
            }, 5);
        }
    }
};

</script>

<style lang="less" scoped>
.sv-backtop {
    position: fixed;
    width: 50px;
    height: 50px;
    background: red;
}
</style>
