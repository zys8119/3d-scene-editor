import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: 'system',
        name: 'System',
        meta: {
            title: '系统管理',
            icon: 'menus-menu',
        },
        children: [
            {
                path: 'menu',
                name: 'Menu',
                meta: {
                    title: '菜单管理',
                },
                component: () => import('@/views/system/menu/index.vue'),
            },
            {
                path: 'organization',
                name: 'Organization',
                meta: {
                    title: '组织架构',
                    tabTitle: '这是组织架构',
                },
                component: () =>
                    import('@/views/system/organization/index.vue'),
            },
        ],
    },
];

export default routes;
