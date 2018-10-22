<template lang="pug">
    div(id="app")
        sv-button(v-for="(route, i) in routes", :key="route")
            router-link(:to="{name: route}") {{route}}
        sv-button(v-for="(route, i) in testRoutes", :key="route")
            router-link(:to="{name: route}") {{route}}
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
