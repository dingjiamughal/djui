// import Button from '../components/button';
export default [
    // {
    //     name: 'main',
    //     path: '/',
    //     component: Main
    // },
    initRoute('button'),
    initRoute('breadcrumb')
];

function initRoute(componentName) {
    return {
        name: componentName,
        path: `/${componentName}`,
        component: () => import(`../components/${componentName}`)
    };
}
