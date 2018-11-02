<template lang="pug">
    v-middle(
        v-model="value",
        @input="handleInput"
    )
</template>

<script>
import VMiddle from './middle';
export default {
    components: {
        VMiddle
    },
    data() {
        return {
            value: 'dingjia'
        };
    },
    methods: {
        handleInput() {
            console.log(this.value);
        }
    }
};

</script>
