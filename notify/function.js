import Vue from "vue"
import Component from "./notify-function"

//也可以通过new Vue新建实例来创建组件
const NotifyConstructor = Vue.extend(Component)

// 通过seed 给组件加id，为了之后的组件销毁
let seed = 1

const notifyConfig = (options) => {
  //服务端渲染没有dom操作，排除这种情况
  if(Vue.prototype.$isServer) {
    return
  }

  // 分离参数类型
  const {
    autoClose,
    ...rest
  } = options

  // 存放已经创建的实例对象
  const instances = []

  // 定义instance 在Vue实例下写外部扩展的配置项
  // 相当于原生js插件中的Object.assgin()
  // instance 相当于组件内部的this
  const instance = new NotifyConstructor({
    propsData: { ...rest },
    data: {
      autoClose
    }
  })

  // 主体逻辑-------------------------------------
  //定义id，为了删除实例 选到指定的组件
  const id = `NotifyConstructor_${seed++}`
  instance.id = id
  instance.vm = instance.$mount() //生成html节点
  document.body.appendChild(instance.vm.$el)

  // 对内部的data、props进行操作
  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 10
  })
  verticalOffset += 10
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  console.log(instances)

  // 监听组件内部$emit事件
  // instance.vm.$on('closeNotify',() =>
  //   removeInstance(instance)// 删除instance实例
  //   document.body.removeChild(instance.vm.$el) // 删除dom节点
  //   instance.vm.$destroy() // 销毁实例
  // })

  return instance.vm
}

//  写一个方法，删除指定的instance
const removeInstance = (instance) => {
  if(!instance) return
  const index = instances.findIndex(item => item.id === instance.id)
  instances.splice(index,1)
}

export default notifyConfig
