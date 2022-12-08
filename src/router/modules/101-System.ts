import {RouteRecordRaw, RouterView} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: 'system',
        name: 'System',
        meta: {
            title: '系统管理',
        },
        redirect: '/system/organization',
        component: RouterView,
        children: [
            {
                path: 'organization',
                name: 'Organization',
                meta: {
                    title: '组织架构',
                },
                component: () => import('@/views/System/Organization/index.vue')
            },
            {
                path: 'staff',
                name: 'Staff',
                meta: {
                    title: '员工信息',
                },
                component: () => import('@/views/System/Staff/index.vue')
            },
            {
                path: 'system-user',
                name: 'SystemUser',
                meta: {
                    title: '系统用户管理',
                },
                component: () => import('@/views/System/SystemUser/index.vue')
            },
            {
                path: 'menu',
                name: 'Menu',
                meta: {
                    title: '菜单管理',
                },
                component: () => import('@/views/System/Menu/index.vue')
            },
            {
                path: 'role',
                name: 'Role',
                meta: {
                    title: '角色管理',
                },
                component: () => import('@/views/System/Role/index.vue')
            },
        ]
    }
]

export default routes