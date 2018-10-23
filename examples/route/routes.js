/**
 * @file routes.js
 * @author djmughal
 * @description routes
 */

import routes from '../config/enum/route';
import tests from '../config/enum/tests';

const routeSet = routes.map(route => initRoute(route.id));
const testSet = tests.map(route => testRoute(route.id));

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
