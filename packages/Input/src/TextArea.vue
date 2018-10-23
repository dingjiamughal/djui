<template lang="pug">
    .sv-textarea-wrapper
        textarea.sv-textarea(
            :value="value",
            :readOnly="readOnly",
            :disabled="disabled",
            :placeholder="placeholder",
            :class="inputCls",
            :rows="rows",
            @input="handleInput"
        )
        .count-wrapper(
            :class="{'sv-textarea-count-error': !!this.error || count > max}"
        )
            span {{count}}
            span /
            span {{max}}
</template>

<script>
import InputBehaviour from './inputBehaviour';

export default {
    mixins: [InputBehaviour],
    name: 'Textarea',
    props: {
        max: {
            type: Number,
            default: 0
        },
        rows: {
            type: Number,
            default: 5
        }
    },
    computed: {
        count() {
            return this.value.length;
        }
    }
};

</script>

<style lang="less" scoped>
.sv-textarea {
    height: auto;

    &-wrapper {
        position: relative;

        .count-wrapper {
            position: absolute;
            bottom: 10px;
            right: 8px;

            span {
                font-size: 14px;
                color: #bbb;
            }
        }
    }

    &-count-error {
        span {
            color: @palette-red-1 !important;
        }
    }
}
</style>
