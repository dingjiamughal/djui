// import Button from '../components/button';
import routes from '../config/enum/route';
import tests from '../config/enum/tests';
const routeSet = routes.map(route => initRoute(route));
const testSet = tests.map(route => testRoute(route));

/* fecs-disable fecs-prefer-spread-element */
export default [
    // {
    //     name: 'main',
    //     path: '/',
    //     component: Main
    // },
    ...routeSet,
    ...testSet
];

function initRoute(componentName) {
    return {
        name: componentName,
        path: `/${componentName}`,
        component: () => import(`../components/${componentName}`)
    };
}

function testRoute(componentName) {
    return {
        name: componentName,
        path: `/test/${componentName}`,
        component: () => import(`../test/${componentName}`)
    };
}
