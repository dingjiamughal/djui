/**
 * @file main.js
 * @author djmughal
 * @description app entry file
 */
import Vue from 'vue';
import App from './App.vue';
import router from './route';
import sevenUI from './../packages/index';
Vue.use(sevenUI);

Vue.config.productionTip = false;

const v = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
