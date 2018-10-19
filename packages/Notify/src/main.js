/**
 * @file main.js
 * @author djmughal
 * @description notify init instance
 */
import Vue from 'vue';
import Component from './mixin';

// 也可以通过new Vue新建实例来创建组件
const NotifyConstructor = Vue.extend(Component);
let seed = 1;
const instances = [];

export default options => {
    // 服务端渲染没有dom操作，排除这种情况
    if (Vue.prototype.$isServer) {
        return;
    }

    // 分离参数类型
    const {
        autoClose,
        ...rest
    } = options;

    // 定义instance 在Vue实例下写外部扩展的配置项
    // 相当于原生js插件中的Object.assgin()
    // instance 相当于组件内部的this
    const instance = new NotifyConstructor({
        propsData: {
            ...rest
        },
        data: {
            autoClose: autoClose === undefined ? 3000 : autoClose
        }
    });

    //  写一个方法，删除指定的instance
    const removeInstance = instance => {
        if (!instance) {
            return;
        }
        const len = instances.length;
        const index = instances.findIndex(item => item.id === instance.id);
        instances.splice(index, 1);

        if (len <= 1) {
            return;
        }

        const removeHeight = instance.vm.height;
        for (let i = index; i < len - 1; i++) {
            instances[i].verticalOffset
                = parseInt(instances[i].verticalOffset, 10) - removeHeight - 16;
        }
    };

    // 主体逻辑-------------------------------------
    // 定义id，为了删除实例 选到指定的组件
    const id = `NotifyConstructor_${seed++}`;
    instance.id = id;
    instance.vm = instance.$mount(); // 生成html节点
    document.body.appendChild(instance.vm.$el);

    // 对内部的data、props进行操作
    let verticalOffset = 0;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 10;
    });
    verticalOffset += 10;
    instance.verticalOffset = verticalOffset;
    instances.push(instance);

    // $emit事件：触发关闭按钮
    instance.vm.$on('closeNotify', () => {
        removeInstance(instance); // 删除instance实例
        document.body.removeChild(instance.vm.$el); // 删除dom节点
        instance.vm.$destroy(); // 销毁实例
    });

    // $emit事件：动画结束
    instance.vm.$on('leave', () => {
        removeInstance(instance); // 删除instance实例
        document.body.removeChild(instance.vm.$el); // 删除dom节点
        instance.vm.$destroy(); // 销毁实例
    });
    return instance.vm;
};
