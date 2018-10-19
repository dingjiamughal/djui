<template lang="pug">
    div(id="app")
        sv-button(v-for="route in routes")
            router-link(:to="{name: route}") {{route}}
        router-view
</template>

<script>
import routes from './util/route';

export default {
    data() {
        return {
            routes
        };
    }
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
