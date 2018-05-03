/**
 * @Author: Dingjia
 * @Date:   2018-04-15T15:46:42+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-15T15:51:23+08:00
 */



 import Vue from "vue"
 import Vuex from "vuex"

 import state from "./state"
 import getters from "./getters"
 import actions from "./actions"
 import mutations from "./mutations"

 Vue.use(Vuex)

 export default new Vuex.Store({
   state,
   getters,
   actions,
   mutations
 })
