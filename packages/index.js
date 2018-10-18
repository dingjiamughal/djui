/**
 * @file index.js
 * @author djmughal
 * @description main entry file
 */

import SvButton from './Button';
import SvBreadcrumb from './Breadcrumb';

const components = {
    SvButton,
    SvBreadcrumb
};

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install(Vue) {
        // if (install.installed) {
        //     return;
        // }

        Object.values(components).forEach(component => {
            Vue.component(`sv${component.name}`, component);
        });
    },
    ...components
};
