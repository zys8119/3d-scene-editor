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
                path: 'user-group',
                name: 'UserGroup',
                meta: {
                    title: '用户组管理',
                },
                component: () => import('@/views/system/user-group/index.vue'),
            },
            {
                path: 'position',
                name: 'Position',
                meta: {
                    title: '职位管理',
                },
                component: () => import('@/views/system/position/index.vue'),
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
                path: 'api',
                name: 'Api',
                meta: {
                    title: '接口管理',
                },
                component: () => import('@/views/system/api/index.vue'),
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
