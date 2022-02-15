import { RouteRecordRaw, RouterView } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
    {
        path: 'system',
        name: 'System',
        meta: {
            title: '系统管理'
        },
        redirect: '/system/organization',
        component: RouterView,
        children: [
            {
                path: 'organization',
                name: 'Organization',
                meta: {
                    title: '组织架构管理',
                },
                component: () => import('@/views/System/Organization/index.vue')
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

export default homeRoutes