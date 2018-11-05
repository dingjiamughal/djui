<script>
export default {
    name: 'Progress',
    render(h) {
        return h('div', {
                class: 'sv-progress'
            }, [
                h('div', {
                    class: [
                        'sv-progress-outer',
                        {
                            'sv-progress-outer-outside': !this.textInside
                        }
                    ],
                    style: {
                        height: this.barHeight
                    }
                }, [
                    h('div', {
                        class: 'sv-progress-inner',
                        style: {
                            'background-color': this.color,
                            width: `${this.percentage}%`
                        }
                    }, [
                        h('div', {
                            class: 'sv-progress-innerText'
                        }, `${this.percentage}%`)
                    ])
                ])
            ]
        );
    },
    props: {
        height: {
            type: String,
            default: '18'
        },
        color: {
            type: String,
            default: '#409eff'
        },
        percentage: {
            type: Number,
            default: 0
        },
        textInside: {
            type: Boolean,
            default: true
        }

    },
    computed: {
        barHeight() {
            // 在text-inside下生效
            if (this.textInside) {
                if (this.height.includes('%')) {
                    return this.height;
                }
                return this.height < 20 ? '20px' : `${this.height}px`;
            }
        }
    }
};

</script>

<style lang="less" scoped>
.sv-progress {
    width: 100%;

    &-outer {
        width: 100%;
        position: relative;
        background: #ebeef5;
        border-radius: 100px;
        box-sizing: border-box;

        &-outside {
            padding-right: 50px;
            margin-right: -55px;
            height: 6px;

            .sv-progress-innerText {
                position: absolute;
                right: 0;
                margin-left: 10px;
            }
        }

    }

    &-inner {
        text-align: right;
        border-radius: 100px;
        height: 100%;
    }

    &-innerText {
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
    }
}
</style>
