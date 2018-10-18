<template lang="pug">
    button(:class="btnCls", :disabled="disabled")
        span
            slot
</template>

<script>
export default {
    name: 'Button',
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
                {
                    [`${prefix}-${this.type}`]: !!this.type,
                    [`${prefix}-loading`]: !!this.loading,
                    [`${prefix}-${this.size}`]: !!this.size,
                    'disabled': !!this.disabled
                }
            ];
        }
    }
};

</script>

<style lang="less" scoped>
@btn-w: 74px;
@btn-h: 36px;
.sv-button {
    line-height: 1.5;
    font-size: 14px;
    padding: 0 16px;
    border-radius: 4px;
    min-width: @btn-w;
    height: @btn-h;
    color: #fff;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    background: #fff;
    transition: all .2s;
    outline: none;

    // type
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

    &.disabled {
        color: rgba(0, 0, 0, 0.3);
        background: @palette-text-disabled;
        border: 1px solid @palette-text-disabled;
        cursor: not-allowed;
    }

    // size
    &-lg {
        min-width: @btn-w + 10px;
        height: @btn-h + 6px;
    }

    &-sm {
        height: @btn-h - 4px;
    }
}
</style>
