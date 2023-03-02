import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'demo',
        name: 'demo',
        meta: {
            title: 'demo',
            icon: 'menus-menu',
        },
        children: [
            {
                path: 'test1',
                name: 'test1',
                meta: {
                    title: 'test1',
                },
                component: () => import('@/views/demo/test1.vue'),
                children: [
                    {
                        path: 'test3',
                        name: 'test3',
                        meta: {
                            title: 'test3',
                            hidden: true,
                        },
                        component: () => import('@/views/demo/test3.vue'),
                    },
                ],
            },
        ],
    },
    {
        path: 'demo2',
        name: 'demo2',
        meta: {
            title: 'demo2',
            icon: 'menus-menu',
        },
        component: () => import('@/views/demo/test2.vue'),
    },
];

export default routes;
