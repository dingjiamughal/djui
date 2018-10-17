<template>
    <div>
        <button @click="handleClickDemo"></button>
        <p>组件成功生效</p>
    </div>
</template>

<script>
export default {
    name: 'colorPicker',
    methods: {
        handleClickDemo() {
            this.$emit('handleBtn');
        }
    }
};

</script>