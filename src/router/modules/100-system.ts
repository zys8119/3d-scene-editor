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
                path: 'organization',
                name: 'Organization',
                meta: {
                    title: '组织架构',
                },
                component: () =>
                    import('@/views/system/organization/index.vue'),
            },
            {
                path: 'user',
                name: 'User',
                meta: {
                    title: '用户管理',
                },
                component: () => import('@/views/system/user/index.vue'),
            },
            {
                path: 'menu',
                name: 'Menu',
                meta: {
                    title: '菜单管理',
                },
                component: () => import('@/views/system/menu/index.vue'),
            },
            {
                path: 'role',
                name: 'Role',
                meta: {
                    title: '角色管理',
                },
                component: () => import('@/views/system/role/index.vue'),
            },
        ],
    },
];

export default routes;
