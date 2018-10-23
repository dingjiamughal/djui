<template lang="pug">
    div
        .input
            sv-input(v-model="inputVal",
                @input="handleInput",
                placeholder="请输入..",
                :disabled="false",
                :error="false",
                :readOnly="false"
            )
            sv-button(@click="handleClickInput") 点击

        .textarea
            sv-textarea(
                v-model="textAreaVal",
                :max=30
                :error="false"
            )
            sv-button(@click="handleClickTextarea") 点击
</template>

<script>
export default {
    data() {
        return {
            inputVal: 'haha',
            textAreaVal: 'textarea'
        };
    },
    methods: {
        handleClickInput() {
            console.log(this.inputVal);
        },
        handleClickTextarea() {
            console.log(this.textAreaVal);
        },
        handleInput() {
            console.log(this.inputVal);
        }
    }
};

</script>
