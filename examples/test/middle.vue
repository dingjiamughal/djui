<template lang="pug">
    div
        v-input(
            v-bind="$props",
            v-on="$listeners"
        )
        p 123213212332132321321
</template>

<script>
import VInput from './props';
export default {
    components: {
        VInput
    },
    props: {
        value: String
    },
    created() {
        console.log(this)
    }
};
</script>
