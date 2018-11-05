/**
 * @file index.js
 * @author djmughal
 * @description main entry file
 */

import SvButton from './Button';
import SvBreadcrumb from './Breadcrumb';
import SvNotify from './Notify';
import {Row, Col} from './Layout';
import svBacktop from './BackTop';
import svInput from './Input';
import svTable from './Table';
import svProgress from './Progress';

const components = {
    SvButton,
    SvBreadcrumb,
    SvNotify,
    Row,
    Col,
    svBacktop,
    svInput,
    svTextArea: svInput.TextArea,
    svTable,
    svProgress
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

        Vue.prototype.$notify = SvNotify;
    },
    ...components
};
