import {RouteRecordRaw, RouterView} from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
    {
        path: 'demo',
        name: 'demo',
        meta: {
            title: 'demo',
        },
        component: RouterView,
        children: [
            {
                path: 'test2',
                name: 'test2',
                meta: {
                    title: 'test2',
                    permissions: ['admin']
                },
                component: () => import('@/views/Demo/Test2.vue'),
                children: [
                    {
                        path: 'test3',
                        name: 'test3',
                        meta: {
                            title: 'test3',
                            hidden: true
                        },
                        component: () => import('@/views/Demo/Test3.vue')
                    }
                ]
            },
        ]
    }
]

export default homeRoutes