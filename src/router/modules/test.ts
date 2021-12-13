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
                component: () => import('@/components/views/Test/IsH5.vue')
            },
            {
                path: 'data-request',
                name: 'DataRequest',
                meta: {
                    title: '数据请求'
                },
                component: () => import('@/components/views/Test/DataRequest.vue')
            },
            {
                path: 'tsx',
                name: 'Tsx',
                meta: {
                    title: 'TSX'
                },
                component: () => import('@/components/views/Test/Tsx')
            },
            {
                path: 'components',
                name: 'Components',
                meta: {
                    title: '组件们'
                },
                component: () => import('@/components/views/Test/Components.vue')
            }
        ]
    }    
]

export default testRoutes