// import Button from '../components/button';
import routes from '../util/route';

const routeSet = routes.map(route => initRoute(route));

/* fecs-disable fecs-prefer-spread-element */
export default [
    // {
    //     name: 'main',
    //     path: '/',
    //     component: Main
    // },
    ...routeSet
];

function initRoute(componentName) {
    return {
        name: componentName,
        path: `/${componentName}`,
        component: () => import(`../components/${componentName}`)
    };
}
