import { RouteRecordRaw, RouterView } from 'vue-router'

const testRoutes: RouteRecordRaw[] = [
    {
        path: 'test',
        name: 'test',
        meta: {
            title: '测试案例'
        },
        component: RouterView,
        children: [
            {
                path: 'if-h5',
                name: 'IfH5',
                meta: {
                    title: '我是H5吗'
                },
                component: () => import('@/components/views/TestCase/IsH5.vue')
            },
            {
                path: 'data-request',
                name: 'DataRequest',
                meta: {
                    title: '数据请求'
                },
                component: () => import('@/components/views/TestCase/DataRequest.vue')
            }
        ]
    }    
]

export default testRoutes