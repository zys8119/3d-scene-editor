import { RouteRecordRaw, RouterView } from 'vue-router'
import { markRaw } from 'vue'
import {
    HomeFilled,
    Histogram
} from '@element-plus/icons'

const homeRoutes: RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'home',
        meta: {
            title: '首页',
            icon: markRaw(HomeFilled)
        },
        component: () => import('@/components/views/HelloWorld.vue')
    },
    {
        path: 'home2',
        name: 'home2',
        meta: {
            title: '被封印的首页',
            icon: markRaw(Histogram),
            disabled: true
        },
        component: () => import('@/components/views/HelloWorld.vue')
    },
    {
        path: 'home3',
        name: 'home3',
        redirect: '/home3/home4',
        meta: {
            title: '特殊页面'
        },
        component: RouterView,
        children: [
            {
                path: 'home4',
                component: () => import('@/components/views/HelloWorld.vue'),
                meta: {
                    title: '全屏页面',
                    isFullPage: true
                }
            },
            {
                path: 'baidu',
                name: 'baidu',
                redirect: '/home3',
                meta: {
                    title: '我是个外链',
                    url: 'http://www.google.com'
                }
            },
            {
                path: 'baidu2',
                name: 'baidu2',
                redirect: '/home3',
                meta: {
                    title: '新链接打开',
                    url: 'http://www.google.com',
                    target: '_blank'
                }
            }
        ]
    }
]

export default homeRoutes