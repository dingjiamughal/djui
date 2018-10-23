<template lang="pug">
    .sv-textarea-wrapper
        textarea(
            :value="value",
            :readOnly="readOnly",
            :disabled="disabled",
            :placeholder="placeholder",
            :class="inputCls",
            :rows="rows",
            :cols="cols",
            @input="handleInput"
        )
        .count-wrapper
            span 0
            span /
            span 500
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
        cols: {
            type: Number,
            default: 100
        },
        rows: {
            type: Number,
            default: 10
        }
    }

};

</script>
