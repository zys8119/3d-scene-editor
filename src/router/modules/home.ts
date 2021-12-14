import { RouteRecordRaw, RouterView } from 'vue-router'
import { markRaw } from 'vue'
import {
    HomeFilled
} from '@element-plus/icons'

const homeRoutes: RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'home',
        meta: {
            title: '首页',
            icon: markRaw(HomeFilled)
        },
        component: () => import('@/views/HelloWorld.vue')
    },
    {
        path: 'parent',
        name: 'parent',
        redirect: '/home',
        meta: {
            title: '父级菜单'
        },
        component: RouterView,
        children: [
            {
                path: 'baidu',
                name: 'baidu',
                redirect: '/home',
                meta: {
                    title: '新链接打开',
                    url: 'http://www.baidu.com',
                    target: '_blank'
                }
            }
        ]
    }
]

export default homeRoutes