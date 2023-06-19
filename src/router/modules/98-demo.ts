import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'demo',
        name: 'Demo',
        meta: {
            title: 'demo',
            icon: 'menus-menu',
        },
        redirect: '/demo/test1',
        children: [
            {
                path: 'test1',
                name: 'Test1',
                meta: {
                    title: 'test1',
                    permissions: [
                        {
                            code: 'add',
                            name: '新增',
                        },
                        {
                            code: 'edit',
                            name: '编辑',
                        },
                    ],
                },
                component: () => import('@/views/demo/test1.vue'),
                children: [
                    {
                        path: 'test3',
                        name: 'Test3',
                        meta: {
                            title: 'test3',
                            hidden: true,
                            openPullRefresh: false,
                            keepAlive: true,
                        },
                        component: () => import('@/views/demo/test3.vue'),
                    },
                ],
            },
        ],
    },
];

export default routes;
