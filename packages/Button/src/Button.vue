<template lang="pug">
    button(:class="btnCls", :disabled="disabled")
        span
            slot
</template>

<script>
export default {
    name: 'svButton',
    props: {
        type: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        }
    },
    computed: {
        btnCls() {
            const prefix = 'sv-button';
            return [
                prefix,
                `${prefix}-${this.type}`,
                {
                    [`${prefix}-loading`]: !!this.loading,
                    [`${prefix}-${this.size}`]: !!this.size
                }
            ];
        }
    }
};

</script>

<style lang="less" scoped>

.sv-button {
    line-height: 1.5;
    font-size: 14px;
    padding: 0 15px;
    border-radius: 4px;
    min-width: 74px;
    height: 32px;
    color: #fff;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    background: #fff;
    transition: all .2s;
    outline: none;

    &:hover {
        border-color: #1890ff;
    }

    &-primary {
        .btn-common(@palette-blue-2);

        &:hover {
            .btn-common-hover(@palette-blue-3);
        }
    }

    &-danger {
        .btn-common(@palette-red-2);

        &:hover {
            .btn-common-hover(@palette-red-3);
        }
    }

    &-info {
        .btn-common(@palette-grey-2);

        &:hover {
            .btn-common-hover(@palette-grey-3);
        }
    }

    &-warning {
        .btn-common(@palette-yellow-2);

        &:hover {
            .btn-common-hover(@palette-yellow-3);
        }
    }

    &-success {
        .btn-common(@palette-green-2);

        &:hover {
            .btn-common-hover(@palette-green-3);
        }
    }
}
</style>
