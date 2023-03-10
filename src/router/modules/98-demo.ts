import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'demo',
        name: 'Demo',
        meta: {
            title: 'demo',
            icon: 'menus-menu',
        },
        children: [
            {
                path: 'test1',
                name: 'Test1',
                meta: {
                    title: 'test1',
                },
                component: () => import('@/views/demo/test1.vue'),
                children: [
                    {
                        path: 'test3',
                        name: 'Test3',
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
];

export default routes;
