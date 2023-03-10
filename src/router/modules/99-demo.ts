import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'demo2',
        name: 'Demo2',
        meta: {
            title: 'demo2',
            icon: 'menus-menu',
        },
        component: () => import('@/views/demo/test2.vue'),
    },
];

export default routes;
