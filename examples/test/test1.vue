<template lang="pug">
    div
        base-input(
            v-model="username",
            @input="handleInput",
            placeholder="qingshuru",
            :aaa="aaa"
        )
</template>

<script>
import baseInput from './props';
export default {
    components: {
        baseInput
    },
    data() {
        return {
            username: 'dingjia',
            custom: 'custom..',
            aaa: 'testaa1a'
        };
    },
    methods: {
        handleInput(v) {
            console.log(v)
        }
    }
};

</script>

