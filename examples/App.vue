<template lang="pug">
    div(id="app")
        sv-button
            router-link(:to="{name: 'button'}") button
        sv-button
            router-link(:to="{name: 'breadcrumb'}") breadcrumb

        router-view
</template>

<script>

export default {

};

</script>

<style lang="less" scoped>
body,
html {
    margin: 0;
    padding: 0;
}
button {
    margin-right: 5px;
}
</style>
