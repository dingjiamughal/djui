<template lang="pug">
    input(
        type="text",
        :value="value",
        :readOnly="readOnly",
        :disabled="disabled",
        :placeholder="placeholder",
        :class="inputCls",
        @input="handleInput"
    )
</template>

<script>
export {default} from './inputBehaviour';
</script>

<style lang="less">
.sv-input {
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    width: 100%;
    outline: none;

    &:focus,
    &:hover {
        border: 1px solid @palette-primary-2;
    }

    &:focus {
        background: #f6f7fb;
    }

    &-error {
        border: 1px solid @palette-red-1 !important;
    }
}
</style>
