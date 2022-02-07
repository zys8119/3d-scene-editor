import { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'home',
        meta: {
            title: '文创AR系统',
            fixed: true
        },
        component: () => import('@/views/Home.vue')
    }
]

export default homeRoutes