<template lang="pug">
    div(id="app")
        sv-button(v-for="route in routes", :key="route.value")
            router-link(:to="{name: route.id}") {{route.id}}
        sv-button(v-for="route in testRoutes", :key="route.id")
            router-link(:to="{name: route.id}") {{route.id}}
        router-view
</template>

<script>
import routes from './config/enum/route';
import testRoutes from './config/enum/tests';

export default {
    data() {
        return {
            routes,
            testRoutes
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
