import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: 'demo',
        name: 'demo',
        meta: {
            title: 'demo',
            icon: 'menu'
        },
        children: [
            {
                path: 'test2',
                name: 'test2',
                meta: {
                    title: 'test2',
                },
                component: () => import('@/views/demo/test2.vue'),
                children: [
                    {
                        path: 'test3',
                        name: 'test3',
                        meta: {
                            title: 'test3',
                            hidden: true
                        },
                        component: () => import('@/views/demo/test3.vue')
                    }
                ]
            },
        ]
    },
    {
        path: 'demo2',
        name: 'demo2',
        meta: {
            title: 'demo2',
            icon: 'data-order'
        },
        component: () => import('@/views/demo/test1.vue'),
    }
]

export default routes