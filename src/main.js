/**
 * @Author: Dingjia
 * @Date:   2018-04-29T00:22:44+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-29T16:48:26+08:00
 */



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "@/common/style/common.less"
import App from './App'
import router from './router'
import store from "./store"
import axios from 'axios'

import Notification from "@/components/notification"

Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(Notification)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
