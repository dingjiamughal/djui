/**
 * @file index.js
 * @author djmughal
 * @description main entry file
 */

import SvButton from './Button';
const components = [
    SvButton
];

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install(Vue) {
        // if (install.installed) {
        //     return;
        // }

        components.map(component => {
            Vue.component(component.name, component);
        });
    },
    SvButton
};

// export {
//     SvButton
// };
