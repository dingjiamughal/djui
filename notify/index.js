import Notification from "./notify.vue"
import NotifyFunc from "./function"

export default (Vue) => {
  Vue.component(Notification.name,Notification)
  Vue.prototype.$djNotify = NotifyFunc
}
