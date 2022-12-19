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
                    tabTitle: 'asdfjalskdfj',
                    fixed: true
                },
                component: () => import('@/views/System/Organization/index.vue')
            },
        ]
    }
]

export default routes